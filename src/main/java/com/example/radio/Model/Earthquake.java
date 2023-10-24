package com.example.radio.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Earthquake {

  @Id
  @GeneratedValue

  int id;
  int num;
  int eqyear;
  int eqmonth;
  int eqday;
  String eqtime;
  String antemeri;
  Float eqscale;
  String deep;
  String magnitude;
  Float lat;
  Float lon;
  String location;
  String maploc;
  String detail;

}
