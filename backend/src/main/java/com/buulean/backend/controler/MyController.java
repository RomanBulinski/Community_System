package com.buulean.backend.controler;

import com.buulean.backend.model.City;
import com.buulean.backend.repository.OwnerRepository;
import com.buulean.backend.service.ICityService;
import com.buulean.backend.service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//@Controller

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/*")
public class MyController {

    @Autowired
    private ICityService cityService;
    @Autowired
    private OwnerService ownerService;
    @Autowired
    private OwnerRepository ownerRepository;


    @GetMapping("/showCities")
    public String findCities(Model model) {
        List<City> cities = (List<City>) cityService.findAll();
        model.addAttribute("cities", cities);
        return "showCities";
    }



}
