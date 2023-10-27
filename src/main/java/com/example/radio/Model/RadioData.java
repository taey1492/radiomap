package com.example.radio.Model;

import lombok.Data;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Data
public class RadioData implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "r_year")
    Integer year;
    @Column(name = "r_month")
    Integer month;
    @Column(name = "r_item")
    String item;
    @Column(name = "r_ecolname")
    String ecolname;

    @Column(name = "r_coldate")
    String coldate;
    @Column(name = "r_depth")
    String depth;
    @Column(name = "r_134cs")
    Float r134cs;
    @Column(name = "r_137cs")
    Float r137cs;
    @Column(name = "r_3h")
    Float r3h;
    @Column(name = "r_zenbeta")
    Float rzenbeta;
    @Column(name = "r_90sr")
    Float r90sr;
    @Column(name = "r_239_240pu")
    Float r239_240pu;
    @Column(name = "r_240pu_239pu")
    Float r240pu_239pu;

    @ManyToOne
    @JoinColumn(name = "r_pinnacle")
    RadioAddress radioAddress;

}
