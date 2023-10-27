package com.example.radio.Model;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Dust {

    @Id
    String Code;
    String Classification;
    String Name;
    Float X;
    Float Y;
}
