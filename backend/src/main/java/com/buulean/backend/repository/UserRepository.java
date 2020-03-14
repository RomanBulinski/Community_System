package com.buulean.backend.repository;

import com.buulean.backend.model.Owner;
import com.buulean.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    void delete(User user);

}
