package com.buulean.backend.service;

import com.buulean.backend.model.User;
import com.buulean.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findAll() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public User delete(long id) {
        User user = userRepository.findById(id).get();
        if(user != null){
            userRepository.delete(user);
        }
        return user;
    }


}
