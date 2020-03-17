package com.buulean.backend.controler;

import com.buulean.backend.model.Property;
import com.buulean.backend.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@Controller

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/properties")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @GetMapping()
    public List<Property> findPropertys(){
        List<Property> properties = (List<Property>) propertyService.findAll();
        return properties;
    }

//    @GetMapping(path = {"/{id}"})
//    public Property findOne(@PathVariable("id") int id){
//        return PropertyService.findById(id);
//    }
//
//    @DeleteMapping(path ={"/{id}"})
//    public Property delete(@PathVariable("id") int id) {
//        return PropertyService.delete(id);
//    }
//
//    @PostMapping()
//    public Property create(@RequestBody Property Property) {
//        return PropertyService.create(Property);
//    }
//
//    @PutMapping
//    public Property update(@RequestBody Property Property){
//        return PropertyService.update(Property);
//    }



}
