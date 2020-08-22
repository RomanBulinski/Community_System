package com.buulean.backend.controler;

import com.buulean.backend.model.Document;
import com.buulean.backend.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@CrossOrigin
@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/documents")
public class DocumentController {

    @Autowired
    private DocumentService documentService;

    @GetMapping()
    public List<Document> findDocuments(HttpServletResponse response) {
        List<Document> documents = (List<Document>) documentService.findAll();
        response.setStatus(201);
        return documents;
    }

    @GetMapping(path = {"/{id}"})
    public Document findDocument(@PathVariable("id") int id) {
        return documentService.findById(id);
    }

    @PostMapping()
    public Document create(@RequestBody Document document) {
        return documentService.create(document);
    }

//    @DeleteMapping(path ={"/{id}"})
//    public Owner delete(@PathVariable("id") int id) {
//        return ownerService.delete(id);
//    }
//

}



