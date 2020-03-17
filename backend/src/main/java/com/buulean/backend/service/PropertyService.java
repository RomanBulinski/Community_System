package com.buulean.backend.service;

import com.buulean.backend.model.Property;
import com.buulean.backend.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyService implements IPropertyService{

    @Autowired
    private PropertyRepository propertyRepository;

    @Override
    public List<Property> findAll() {
        return (List<Property>) propertyRepository.findAll();
    }

}
