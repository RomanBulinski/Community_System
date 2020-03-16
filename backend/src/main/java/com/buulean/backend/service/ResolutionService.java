package com.buulean.backend.service;

import com.buulean.backend.model.Resolution;
import com.buulean.backend.repository.ResolutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResolutionService implements IResolutionService {

    @Autowired
    private ResolutionRepository resolutionRepository;

    @Override
    public List<Resolution> findAll() {
        return (List<Resolution>) resolutionRepository.findAll();
    }

//    @Override
//    public Resolution delete(long id) {
//        Resolution resolution = ResolutionRepository.findById(id).get();
//        if(resolution != null){
//            ResolutionRepository.delete(resolution);
//        }
//        return resolution;
//    }

//    @Override
//    public Resolution create(Resolution resolution) {
//        return ResolutionRepository.save(resolution);
//    }

//    @Override
//    public Resolution findById(int id) {
//        long longId = (long) id;
//        return ResolutionRepository.getOne(longId);
//    }

//    @Override
//    public Resolution update(Resolution Resolution) {
//        return null;
//    }



}
