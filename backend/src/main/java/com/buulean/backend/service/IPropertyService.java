package com.buulean.backend.service;

import com.buulean.backend.model.Apartment;
import com.buulean.backend.model.Property;

import java.util.List;

public interface IPropertyService {

    List<Property> findAll();
}