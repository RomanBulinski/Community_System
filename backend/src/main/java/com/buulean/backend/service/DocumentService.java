package com.buulean.backend.service;

import com.buulean.backend.model.Document;
import com.buulean.backend.model.Owner;
import com.buulean.backend.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class DocumentService implements IDocumentService {

    @Autowired
    private DocumentRepository documentRepository;

    @Override
    public List<Document> findAll() {
        return (List<Document>) documentRepository.findAll();
    }

    @Override
    public Document findById(int id) {
        long longId = (long) id;
        return documentRepository.getOne(longId);
    }

    @Override
    public Document create(Document document) {
        return documentRepository.save(document);
    }


//    @Override
//    public Document delete(long id) {
//        return null;
//    }
//


}
