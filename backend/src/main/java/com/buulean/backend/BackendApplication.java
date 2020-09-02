package com.buulean.backend;

import com.buulean.backend.dbInfiller.SQLDataCreater;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {

        SpringApplication.run(BackendApplication.class, args);
        SQLDataCreater dbCreater = new SQLDataCreater();

    }
}
