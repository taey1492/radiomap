package com.example.radio.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.radio.Model.Earthquake;
import com.example.radio.Repository.EarthquakeRepository;

@Controller
public class EarthquakeController {
  @Autowired
  EarthquakeRepository earthquakeRepository;

  @GetMapping("/yearsearch")
  @ResponseBody
  public List<Earthquake> yearOut(@RequestParam int year) {

    List<Earthquake> eqList = earthquakeRepository.findAllByEqyear(year);

    return eqList;
  }

}
