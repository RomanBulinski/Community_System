package com.buulean.backend.repository;

import com.buulean.backend.model.Owner;
import com.buulean.backend.model.Resolution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//@Repository
//public interface OwnerRepository extends CrudRepository<Owner, Long> {

@Repository
public interface ResolutionRepository extends JpaRepository<Resolution, Long> {

//    void delete(Resolution resolution);


}
