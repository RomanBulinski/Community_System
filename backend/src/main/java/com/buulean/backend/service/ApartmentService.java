package com.buulean.backend.service;

import com.buulean.backend.model.Apartment;
import com.buulean.backend.model.Owner;
import com.buulean.backend.repository.ApartmentRepository;
import com.buulean.backend.repository.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApartmentService implements IApartmentService{

    @Autowired
    private ApartmentRepository apartmentRepository;

    @Override
    public List<Apartment> findAll() {
        return (List<Apartment>) apartmentRepository.findAll();
    }
}
