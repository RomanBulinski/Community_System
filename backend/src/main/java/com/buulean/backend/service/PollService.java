package com.buulean.backend.service;

import com.buulean.backend.model.Poll;
import com.buulean.backend.model.Resolution;
import com.buulean.backend.repository.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Service
public class PollService implements IPollService {

    @Autowired
    private PollRepository pollRepository;

    @Override
    public List<Poll> findAll() {
        return pollRepository.findAll();
    }

    @Override
    public List<Poll> findPollsByPropertyId(int id) {
        List<Poll> allPoll = findAll();
        List<Poll> resultList = new ArrayList<>();
        for (Poll poll : allPoll) {
            if (poll.getPropertyid()==id) {
                resultList.add(poll);
            }
        }
        return resultList;
    }

    /*
    Metoda do wyciagania listy wszystkich
    głosów oddanych na konkretną  uchwałe wskazana poprzez podanie jej ID
    **/
    @Override
    public List<Poll> findPollsByResolutionID( int id){
        List<Poll> allPoll = findAll();
        List<Poll> resultList = new ArrayList<>();
        for (Poll poll : allPoll) {
            if (poll.getResolutionid()==id) {
                resultList.add(poll);
            }
        }
        return resultList;
    }

    @Override
    public Poll create(@RequestBody Poll poll) {
        return pollRepository.save(poll);
    }

    @Override
    public Poll findById(int id) {
        long longId = (long) id;
        return pollRepository.getOne(longId);
    }


}





