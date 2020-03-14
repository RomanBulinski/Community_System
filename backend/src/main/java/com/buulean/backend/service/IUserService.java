package com.buulean.backend.service;

import com.buulean.backend.model.Owner;
import com.buulean.backend.model.User;

import java.util.List;

public interface IUserService {

    List<User> findAll();
    User delete(long id);

}
