package com.buulean.backend.repository;

import com.buulean.backend.model.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

//@Repository
//public interface OwnerRepository extends CrudRepository<Owner, Long> {

@Repository
public interface OwnerRepository extends JpaRepository<Owner, Long> {

    void delete(Owner owner);

//    Owner save(Owner owner);



}
