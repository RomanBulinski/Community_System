package com.buulean.backend.controler;

import com.buulean.backend.model.Owner;
import com.buulean.backend.model.Resolution;
import com.buulean.backend.service.OwnerService;
import com.buulean.backend.service.ResolutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    /*
    Resolution - Uchwała
    Property - nieruchomość, własność
    */

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/resolutions")
public class ResolutionController {

    @Autowired
    private ResolutionService resolutionService;

    @GetMapping()
    public List<Resolution> findResolutions(){
        List<Resolution> resolutions = (List<Resolution>) resolutionService.findAll();
        return resolutions;
    }

    @GetMapping(path = {"/{id}"})
    public Resolution findOne(@PathVariable("id") int id){
        return resolutionService.findById(id);
    }

//    @DeleteMapping(path ={"/{id}"})
//    public Resolution delete(@PathVariable("id") int id) {
//        return resolutionService.delete(id);
//    }

//    @PostMapping()
//    public Resolution create(@RequestBody Resolution resolution) {
//        return resolutionService.create(resolution);
//    }
//
//    @PutMapping
//    public Resolution update(@RequestBody Resolution resolution){
//        return resolutionService.update(resolution);
//    }


}
