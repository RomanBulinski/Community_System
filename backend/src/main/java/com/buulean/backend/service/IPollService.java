package com.buulean.backend.service;

import com.buulean.backend.model.Poll;
import com.buulean.backend.model.Property;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface IPollService {

    List<Poll> findAll();

    List<Poll> findPollsByPropertyId(int id);

//    List<Poll> findPollsByOwnerID( int id);

    List<Poll> findPollsByResolutionID(int id);

    Poll create(@RequestBody Poll poll);

    Poll findById(int id);
}
