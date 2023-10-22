 package com.example.radio.Model;

 import lombok.Data;

 import javax.persistence.Column;
 import javax.persistence.Entity;
 import javax.persistence.GeneratedValue;
 import javax.persistence.Id;

 @Entity
 @Data
 public class RadioAddress {
 @Id @GeneratedValue
 int id;

 @Column(name = "r_pinnacle")
 String pinnacle;
 @Column(name = "r_pin")
 String pin;
 }
