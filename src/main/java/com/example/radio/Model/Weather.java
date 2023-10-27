package com.example.radio.Model;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
public class Weather {
    @Id
    int id;

    int wtobs_cd;
    String obs_nm;
    Float lon;
    Float lat;
    String addr;
    Float avg_hmd;
    Float avg_tmr;
    Float avg_wv;
    Float avg_dptm;
    Float mx_tmr;
    Float mn_tmr;
    Float snsn_sum;



}
