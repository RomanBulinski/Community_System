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
    private boolean yes;
    private boolean against;
    private boolean abstention;

    public Poll() {
    }

    public Poll(Long id, Long resolutionid, Long propertyid, Long ownerid, boolean yes, boolean against, boolean abstention ) {
        this.id=id;
        this.resolutionid=resolutionid;
        this.propertyid=propertyid;
        this.ownerid=ownerid;
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
