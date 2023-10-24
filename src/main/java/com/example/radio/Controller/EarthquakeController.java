package com.example.radio.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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

  // 비동기 통신 웹페이지 영역입니다.
  @GetMapping("/gettest")
  @ResponseBody
  public List<Float> test(@RequestParam int id) {

    List<Float> l = new ArrayList<>();

    Optional<Earthquake> earthq = earthquakeRepository.findById(id);
    if (earthq.isPresent()) {
      Float lat = earthq.get().getLat();
      Float lon = earthq.get().getLon();
      l.add(lat);
      l.add(lon);
    } else {
      System.out.println("nothing");
    }

    return l;

  }

  @GetMapping("/yearsearch")
  @ResponseBody
  public List<Earthquake> yearOut(@RequestParam int year) {

    List<Earthquake> eqList = earthquakeRepository.findAllByEqyear(year);

    System.out.println(eqList);

    return eqList;
  }

  @PostMapping("/test")
  public String testPost(@ModelAttribute Earthquake earthquake, Model model) {

    int i = earthquake.getId();

    Optional<Earthquake> earthq = earthquakeRepository.findById(i);

    Float lat = earthq.get().getLat();
    Float lon = earthq.get().getLon();

    List<Float> l = new ArrayList<>();
    l.add(lat);
    l.add(lon);

    model.addAttribute("earthqlist", l);
    return "test/test";
  }

}
