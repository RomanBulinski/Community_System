package com.buulean.backend.dbInfiller;

import com.buulean.backend.loader.Loader;

import java.util.List;

public class SQLDataCreater {

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
        StringBuilder tempOwnerData = new StringBuilder();
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
            if (!tempOwnerData.toString().equals(ownerData.toString())) {
                result.append(ownerData);
                tempOwnerData = ownerData;
                ownerId++;
            }
            createProperties(ownerInfo, ownerId);
        }
        return result.deleteCharAt(result.length() - 1).deleteCharAt(result.length() - 1).append(";").toString();
    }

    private void createProperties(List<String> ownerInfo, long ownerId) {

        StringBuilder result = new StringBuilder();

        String numberOfproperties = ownerInfo.get(1).split("/")[1];
        String participation = ownerInfo.get(2);
        String typeOfProperties = "";
        Integer level = null;
        Integer area = null;
        if (Character.isLetter(numberOfproperties.charAt(0))) {
            if (Character.toString(numberOfproperties.charAt(0)).equals("G")) {
                typeOfProperties = "garage";
                level = -1;
            } else if (Character.toString(numberOfproperties.charAt(0)).equals("M")) {
                typeOfProperties = "garage";
                level = 0;
            }
        } else {
            typeOfProperties = "apartment";
        }
        ;

        result.append("(").append(ownerId)
                .append(", '")
                .append(typeOfProperties)
                .append("', '")
                .append(numberOfproperties)
                .append("', ")
                .append(area)
                .append(", ")
                .append(level)
                .append(", ")
                .append(participation)
                .append("),\n");

        propertiesForSQL = propertiesForSQL + result.toString();


//        (1,'apartment', 'm27', 60.21, 5, 6400),
//        SZKLARZ ADAM,WILEŃSKA 5/16,6225,/,631842
//        ROCHOWIAK BARBARA ROCHOWIAK FRANCISZEK,WILEŃSKA 5/17,10334,/,631842
//        ROCHOWIAK BARBARA ROCHOWIAK FRANCISZEK,WILEŃSKA 5/G21,2442,/,631842
//        MAGDZIARZ ANETA MAGDZIARZ ADAM,WILEŃSKA 5/18,8032,/,631842

    }
}
