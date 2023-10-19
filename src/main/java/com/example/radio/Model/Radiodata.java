package com.example.radio.Model;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Radiodata {
    @Id
    int id;
    int year;
    int month;
    String item;
    String pinnacle;


}
