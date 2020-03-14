package com.buulean.backend.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "apartments")
public class Apartment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String apartment_number;
    private Long area;
    private int level;

    public Apartment() {
    }

    public Apartment(String apartment_number, Long area, int level) {
        this.apartment_number = apartment_number;
        this.area = area;
        this.level = level;
    }

    public Apartment(Long id, String name, String surname ) {
        this.id = id;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getApartment_number() {
        return apartment_number;
    }

    public void setApartment_number(String apartment_number) {
        this.apartment_number = apartment_number;
    }

    public Long getArea() {
        return area;
    }

    public void setArea(Long area) {
        this.area = area;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Apartment apartment = (Apartment) o;
        return level == apartment.level &&
                Objects.equals(id, apartment.id) &&
                Objects.equals(apartment_number, apartment.apartment_number) &&
                Objects.equals(area, apartment.area);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, apartment_number, area, level);
    }

    @Override
    public String toString() {
        return "Apartment{" +
                "id=" + id +
                ", apartment_number='" + apartment_number + '\'' +
                ", area=" + area +
                ", level=" + level +
                '}';
    }


}
