package com.buulean.backend.service;

import com.buulean.backend.model.Resolution;

import java.util.List;

public interface IResolutionService {

    List<Resolution> findAll();

    Resolution findById(int id);

//    Resolution delete(long id);
//
//    Resolution create(Resolution resolution);
//

//
//    Resolution update(Resolution resolution);

}
