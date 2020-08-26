package com.buulean.backend.controler;

import com.buulean.backend.model.Owner;
import com.buulean.backend.service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;


@CrossOrigin
@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/owners")
public class OwnerController {

    @Autowired
    private OwnerService ownerService;

    @GetMapping()
    public List<Owner> findOwners(HttpServletResponse response) {
        List<Owner> owners = ownerService.findAll();
        response.setStatus(201);
        return owners;
    }

    @GetMapping(path = {"/{id}"})
    public Owner findOne(@PathVariable("id") int id) {
        return ownerService.findById(id);
    }

    @DeleteMapping(path = {"/{id}"})
    public Owner delete(@PathVariable("id") int id) {
        return ownerService.delete(id);
    }

    @PostMapping()
    public Owner create(@RequestBody Owner owner) {
        return ownerService.create(owner);
    }

//    @PutMapping
//    public Owner update(@RequestBody Owner owner){
//        return ownerService.update(owner);
//    }

    @PutMapping(path = {"/{id}"})
    public Owner update(@RequestBody Owner owner, @PathVariable long id) {
        return ownerService.update(owner, id);
    }


}
