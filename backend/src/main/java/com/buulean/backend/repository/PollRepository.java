package com.buulean.backend.repository;

import com.buulean.backend.model.Poll;
import com.buulean.backend.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PollRepository extends JpaRepository<Poll, Long> {

    void delete(Poll poll);

    Poll save(Poll poll);



}
