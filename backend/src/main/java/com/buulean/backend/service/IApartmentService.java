package com.buulean.backend.service;

import com.buulean.backend.model.Apartment;
import java.util.List;

public interface IApartmentService {

    List<Apartment> findAll();
}
