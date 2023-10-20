package com.example.radio.Model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Radiodata {
    int year;
    int month;
    String item;
    @Id
    String pinnacle;
    String coldate;
    String depth;

    // @Column(name = "134Cs(mBq/kg)")
    float cs134;

    // @Column(name = "137Cs(mBq/kg)")
    float cs137;

    // @Column(name = "3H(Bq/L)")
    float H3;

    // @Column(name = "zenbeta(Bq/L)")
    float zenbeta;

    // @Column(name = "90Sr(mBq/kg)")
    float Sr90;

    // @Column(name = "239+240Pu(μBq/kg)")
    float Pu239;

    // @Column(name = "240Pu/239Pu")
    float Pu240;

}
