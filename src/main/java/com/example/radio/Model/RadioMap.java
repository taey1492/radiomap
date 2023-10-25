package com.example.radio.Model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Radiomap {

    @Id
    int id;

    @Column(name = "stnpnt_code")
    String code;

    @Column(name = "mre_msnt_sta_korn_nm")
    String address;
    @Column(name = "mre_gge_sea_cd")
    String sea;
    @Column(name = "ocean_nm")
    String ocean;
    @Column(name = "mre_wtch_iem_knd_cd")
    String sar;
    @Column(name = "mre_wtch_iem_nm")
    String iem;
    @Column(name = "mre_msnt_new_sar_cd")
    String newsar;
    @Column(name = "mre_new_wtch_iem_knd_cd")
    String newiem;
    @Column(name = "stt_gu_area_cd")
    String guarea;
    @Column(name = "ecozon_area_nm")
    String area;
    @Column(name = "mre_gge_rm_cn")
    String rm;
    @Column(name = "lon")
    Float lon;
    @Column(name = "lat")
    Float lat;

}
