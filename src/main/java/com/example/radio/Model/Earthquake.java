package com.example.radio.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Earthquake {

  @Id
  @GeneratedValue

  @Column(name = "ID")
  int id;
  @Column(name = "NUM")
  int num;
  @Column(name = "EARYEAR")
  int eqyear;
  @Column(name = "EARMONTH")
  int eqmonth;
  @Column(name = "EARDAY")
  int eqday;
  @Column(name = "EQRTIME")
  String eqtime;
  @Column(name = "ANTEMERI")
  String eqantemeri;
  @Column(name = "EARSCALE")
  Float eqscale;
  @Column(name = "DEEP")
  String deep;
  @Column(name = "MAGNITUDE")
  String magnitude;
  @Column(name = "LAT")
  Float lat;
  @Column(name = "LON")
  Float lon;
  @Column(name = "LOCATION")
  String location;
  @Column(name = "MAPLOC")
  String maploc;
  @Column(name = "DETAIL")
  String detail;

}
