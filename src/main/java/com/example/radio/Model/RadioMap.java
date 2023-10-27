package com.example.radio.Model;

import lombok.Data;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Data

public class RadioMap implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    @Column(name = "r_code", unique = true)
    String code;

    @Column(name = "r_address")
    String address;
    @Column(name = "r_sea")
    String sea;
    @Column(name = "r_ocean")
    String ocean;
    @Column(name = "r_sar")
    String sar;
    @Column(name = "r_iem")
    String iem;
    @Column(name = "r_newsar")
    String newsar;
    @Column(name = "r_newiem")
    String newiem;
    @Column(name = "r_guarea")
    String guarea;
    @Column(name = "r_area")
    String area;
    @Column(name = "r_rm")
    String rm;
    @Column(name = "r_lon")
    Float lon;
    @Column(name = "r_lat")
    Float lat;

}
