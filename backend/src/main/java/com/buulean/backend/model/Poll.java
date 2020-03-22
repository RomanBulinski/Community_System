package com.buulean.backend.model;

//Glosowanie uchwal

import javax.persistence.*;

@Entity
@Table(name = "polls")
public class Poll {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Basic(fetch = FetchType.EAGER)
    private Long id;
    private Long resolutionid;
    private Long propertyid;
    private String vote;


    public Poll() {
    }

    public Poll(Long resolutionid, Long propertyid, Long ownerid, String vote) {
        this.resolutionid=resolutionid;
        this.propertyid=propertyid;
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

    public String getVote() {
        return vote;
    }

    public void setVote(String vote) {
        this.vote = vote;
    }
}
