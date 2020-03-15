package com.buulean.backend.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Objects;


//class witch is responsible for - Uchwała : id / number / tytuł / tresc
@Entity
@Table(name = "resolutions")
public class Resolution {

    private Long id;
    private String symbol;
    private String title;
    private String text;

    public Resolution() {
    }

    public Resolution(Long id, String symbol, String title, String text) {
        this.id=id;
        this.symbol=symbol;
        this.title=title;
        this.text=text;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Resolution that = (Resolution) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(symbol, that.symbol) &&
                Objects.equals(title, that.title) &&
                Objects.equals(text, that.text);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, symbol, title, text);
    }

    @Override
    public String toString() {
        return "Resolution{" +
                "id=" + id +
                ", symbol='" + symbol + '\'' +
                ", title='" + title + '\'' +
                ", text='" + text + '\'' +
                '}';
    }


}
