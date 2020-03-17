package com.buulean.backend.service;

import com.buulean.backend.model.Poll;
import com.buulean.backend.model.Property;
import com.buulean.backend.repository.PollRepository;
import com.buulean.backend.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PollService implements IPollService{

    @Autowired
    private PollRepository pollRepository;

    @Override
    public List<Poll> findAll() {
        return (List<Poll>) pollRepository.findAll();
    }

}
