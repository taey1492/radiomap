package com.example.radio.Model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Radiodata {
    // @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    // @Column(name = "id")
    // Integer id;
    //

    @Id
    @GeneratedValue
    int id;

    Integer r_year;

    Integer r_month;

    String r_item;

    String r_ecolname;

    String r_pinnacle;

    String r_coldate;

    String r_depth;

    // @Column(name = "134Cs(mBq/kg)")

    Float r_134cs;

    // @Column(name = "137Cs(mBq/kg)")

    Float r_137cs;

    // @Column(name = "3H(Bq/L)")

    Float r_3h;

    // @Column(name = "zenbeta(Bq/L)")

    Float r_zenbeta;

    // @Column(name = "90Sr(mBq/kg)")

    Float r_90sr;

    // @Column(name = "239+240Pu(μBq/kg)")

    Float r_239_240pu;

    // @Column(name = "240Pu/239Pu")

    Float r_240pu_239pu;

    // @ManyToOne
    // Radiomap radiomap;

}
