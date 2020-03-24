package com.buulean.backend.service;

import com.buulean.backend.model.Poll;
import com.buulean.backend.model.Property;

import java.util.List;

public interface IPropertyService {

    List<Property> findAll();

    Poll findById(int id);
}
