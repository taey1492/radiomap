package com.example.radio.Model;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@Data
public class Post {
    @Id
    @GeneratedValue
    int id;

    int Post;

    int dailyPost;

    LocalDate lastUpdated;
}
