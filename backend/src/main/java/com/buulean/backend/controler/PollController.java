package com.buulean.backend.controler;

import com.buulean.backend.model.Poll;
import com.buulean.backend.model.Property;
import com.buulean.backend.service.PollService;
import com.buulean.backend.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

//@Controller

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/polls")
public class PollController {

    @Autowired
    private PollService pollService;

    @GetMapping()
    public List<Poll> findPolls(){
        List<Poll> polls = (List<Poll>) pollService.findAll();
        return polls;
    }

    @GetMapping("/byPropertyID/{id}")
    public List<Poll> findPollsByPropertyId(@PathVariable("id") int id){
        List<Poll> polls = (List<Poll>) pollService.findPollsByPropertyId(id);
        return polls;
    }

//    @GetMapping("/byOwnerID/{id}")
//    public List<Poll> findPollsByOwnerID(@PathVariable("id") int id){
//        List<Poll> polls = (List<Poll>) pollService.findPollsByOwnerID(id);
//        return polls;
//    }

    @GetMapping("/byResolutionID/{id}")
    public List<Poll> findPollsByResolutionID(@PathVariable("id") int id){
        List<Poll> polls = (List<Poll>) pollService.findPollsByResolutionID(id);
        return polls;
    }


    @PostMapping()
    public Poll create(@RequestBody Poll poll) {
        return pollService.create(poll);
    }






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
