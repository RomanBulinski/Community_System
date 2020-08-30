package com.buulean.backend;

import com.buulean.backend.dbLoader.Loader;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {

        String LINK_TO_FILE = "/home/roman/IT/Aplication/01_ Community_System/Community_System/backend/src/main/resources/communityData/wilenska03.csv";
        Loader loader = new Loader();
        List<List<String>> data = loader.loadFile(LINK_TO_FILE);

        SpringApplication.run(BackendApplication.class, args);

    }


}
