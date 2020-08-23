package com.buulean.backend.service;

import com.buulean.backend.model.Document;

import java.util.List;

public interface IDocumentService {

    List<Document> findAll();

    Document findById(int id);

    Document save(Document document);


}
