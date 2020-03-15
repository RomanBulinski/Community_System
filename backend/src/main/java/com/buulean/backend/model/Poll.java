package com.buulean.backend.model;

//Glosowanie uchwal

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "polls")
public class Poll {

    private Long id;
    private Long resolution_id;
    private Long owner_id;
    private boolean for_reseolution;
    private boolean against_reseolution;
    private boolean abstention;


}
