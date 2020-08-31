package com.buulean.backend.dbInfiller;

import com.buulean.backend.loader.Loader;

import java.util.List;

public class SQLDataCreater {

    long ownerIdStatic = 0;
    String LINK_TO_FILE = "/home/roman/IT/Aplication/01_ Community_System/Community_System/backend/src/main/resources/communityData/wilenska03.csv";
    Loader loader = new Loader();
    List<List<String>> data = loader.loadFile(LINK_TO_FILE);
    String propertiesForSQL = "";

    public SQLDataCreater() {
        System.out.println(data);
        System.out.println(createrOwnersForSQL(data));
        System.out.println(propertiesForSQL);
    }


    public String createrOwnersForSQL(List<List<String>> data) {

        StringBuilder result = new StringBuilder();
        long ownerId = 0;
        StringBuilder tempownerData = new StringBuilder();
        for (List<String> ownerInfo : data) {
            StringBuilder ownerData = new StringBuilder();
            String[] ownerDetail = ownerInfo.get(0).split(" ");
            ownerData.append("(")
                    .append("'")
                    .append(ownerDetail[1])
                    .append("'").append(", ")
                    .append("'")
                    .append(ownerDetail[0])
                    .append("'").append(", ")
                    .append("' '")
                    .append("),\n");
            if (!tempownerData.toString().equals(ownerData.toString())) {
                result.append(ownerData);
                tempownerData = ownerData;
                ownerId++;
                ownerIdStatic++;
            }
            createProperties(ownerInfo, ownerId);
        }
        return result.deleteCharAt(result.length() - 1).deleteCharAt(result.length() - 1).append(";").toString();
    }

    private void createProperties(List<String> ownerInfo, long ownerId) {
        propertiesForSQL = propertiesForSQL + ownerInfo.get(1) + ownerInfo.get(2);
    }
}
