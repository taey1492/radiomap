package com.example.radio.Model;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Post {
    @Id
    @GeneratedValue
    int id;

    int Post;

}
