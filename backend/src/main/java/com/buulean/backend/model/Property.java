package com.buulean.backend.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "properties")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String type;
    private String symbol;
    private Long area;
    private int level;
    private int participation;

    public Property() {
    }

    public Property(Long id, String type, String symbol, Long area, int level, int participation) {
        this.id = id;
        this.type = type;
        this.symbol = symbol;
        this.area = area;
        this.level = level;
        this.participation = participation;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
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

    public int getParticipation() {
        return participation;
    }

    public void setParticipation(int participation) {
        this.participation = participation;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Property property = (Property) o;
        return level == property.level &&
                participation == property.participation &&
                Objects.equals(id, property.id) &&
                Objects.equals(type, property.type) &&
                Objects.equals(symbol, property.symbol) &&
                Objects.equals(area, property.area);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, type, symbol, area, level, participation);
    }

    @Override
    public String toString() {
        return "Property{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", symbol='" + symbol + '\'' +
                ", area=" + area +
                ", level=" + level +
                ", participation=" + participation +
                '}';
    }


}
