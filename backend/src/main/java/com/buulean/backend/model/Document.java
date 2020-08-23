package com.buulean.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Blob;

@Entity
@Table(name = "documents")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(fetch = FetchType.EAGER)
    private Long id;
    private String file_name;
    private byte[] file_data;
    private String file_type;

    public Document() {
    }

    public Document(String file_name, byte[] file_data, String file_type) {
        this.file_name = file_name;
        this.file_data = file_data;
        this.file_type = file_type;
    }

    public Long getId() {
        return id;
    }

    public String getFile_name() {
        return file_name;
    }

    public void setFile_name(String file_name) {
        this.file_name = file_name;
    }

    public byte[] getFile_data() {
        return file_data;
    }

    public void setFile_data(byte[] file_data) {
        this.file_data = file_data;
    }

    public String getFile_type() {
        return file_type;
    }

    public void setFile_type(String file_type) {
        this.file_type = file_type;
    }
}
