package com.buulean.backend.service;

import com.buulean.backend.model.Owner;

import java.util.List;

public interface IOwnerService {

    List<Owner> findAll();
    Owner delete(long id);
    Owner create(Owner owner);
    Owner findById(int id);
    Owner update(Owner owner, long id);

}
