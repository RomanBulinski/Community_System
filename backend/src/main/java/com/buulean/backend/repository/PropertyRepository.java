package com.buulean.backend.repository;

import com.buulean.backend.model.Owner;
import com.buulean.backend.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {

    void delete(Property property);

//    Owner save(Owner owner);



}
