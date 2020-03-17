package com.buulean.backend.controler;

import com.buulean.backend.model.Poll;
import com.buulean.backend.model.Property;
import com.buulean.backend.service.PollService;
import com.buulean.backend.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//@Controller

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/polls")
public class PollController {

    @Autowired
    private PollService pollService;

    @GetMapping()
    public List<Poll> findPropertys(){
        List<Poll> polls = (List<Poll>) pollService.findAll();
        return polls;
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
