package com.example.radio.Model;

import lombok.Data;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Data
public class RadioAddress implements Serializable {

   @Id
   @Column(name = "r_pinnacle")
   String pinnacle;

   @ManyToOne
   @JoinColumn(name = "r_code", referencedColumnName = "r_code")
   RadioMap radioMap;

}
