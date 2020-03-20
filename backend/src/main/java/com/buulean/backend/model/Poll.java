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
    private Long resolutionid;
    private Long propertyid;
    private Long ownerid;
    private String vote;


    public Poll() {
    }

    public Poll(Long id, Long resolutionid, Long propertyid, Long ownerid, String vote) {
        this.id=id;
        this.resolutionid=resolutionid;
        this.propertyid=propertyid;
        this.ownerid=ownerid;
        this.vote=vote;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getResolutionid() {
        return resolutionid;
    }

    public void setResolutionid(Long resolutionid) {
        this.resolutionid = resolutionid;
    }

    public Long getPropertyid() {
        return propertyid;
    }

    public void setProperty_id(Long propertyid) {
        this.propertyid = propertyid;
    }

    public Long getOwnerid() {
        return ownerid;
    }

    public void setOwnerid(Long ownerid) {
        this.ownerid = ownerid;
    }

    public String getVote() {
        return vote;
    }

    public void setVote(String vote) {
        this.vote = vote;
    }
}
