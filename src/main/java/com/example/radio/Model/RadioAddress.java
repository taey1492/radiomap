package com.example.radio.Model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class RadioAddress {

   @Id
   @Column(name = "r_pinnacle")
   String pinnacle;

   @Column(name = "r_code")
   String code;



}
