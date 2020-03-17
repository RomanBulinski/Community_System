package com.buulean.backend.model;

//Glosowanie uchwal

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "polls")
public class Poll {

    @Id
    private Long id;
    private Long resolution_id;
    private Long property_id;
    private Long owner_id;
    private boolean yes;
    private boolean against;
    private boolean abstention;

    public Poll() {
    }

    public Poll(Long id, Long resolution_id, Long property_id, Long owner_id, boolean yes, boolean against, boolean abstention ) {
        this.id=id;
        this.resolution_id=resolution_id;
        this.property_id=property_id;
        this.owner_id=owner_id;
        this.yes=yes;
        this.against=against;
        this.abstention=abstention;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getResolution_id() {
        return resolution_id;
    }

    public void setResolution_id(Long resolution_id) {
        this.resolution_id = resolution_id;
    }

    public Long getProperty_id() {
        return property_id;
    }

    public void setProperty_id(Long property_id) {
        this.property_id = property_id;
    }

    public Long getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(Long owner_id) {
        this.owner_id = owner_id;
    }

    public boolean isYes() {
        return yes;
    }

    public void setYes(boolean yes) {
        this.yes = yes;
    }

    public boolean isAgainst() {
        return against;
    }

    public void setAgainst(boolean against) {
        this.against = against;
    }

    public boolean isAbstention() {
        return abstention;
    }

    public void setAbstention(boolean abstention) {
        this.abstention = abstention;
    }
}
