package com.buulean.backend.service;

import com.buulean.backend.model.Resolution;

import java.util.List;

public interface IResolutionService {

    List<Resolution> findAll();

    Resolution delete(long id);

    Resolution create(Resolution resolution);

    Resolution findById(int id);

    Resolution update(Resolution resolution);

}
