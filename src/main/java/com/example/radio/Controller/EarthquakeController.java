package com.example.radio.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.radio.Model.Earthquake;
import com.example.radio.Repository.EarthquakeRepository;

@Controller
public class EarthquakeController {
  @Autowired
  EarthquakeRepository earthquakeRepository;

  @GetMapping("/test")
  public String test() {

    return "test/test";
  }

  @PostMapping("/test")

  public String testPost(@ModelAttribute Earthquake earthquake) {

    int id = earthquake.getId();

    Earthquake earthq = earthquakeRepository.findById(id).get();

    Float lat = earthq.getLat();
    Float lon = earthq.getLon();
    System.out.println(lat + "/" + lon);
    return "redirect:/test";
  }

}
