package com.example.radio.Model;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Radiomap {
    @Id
    String id;
    String title;
}
