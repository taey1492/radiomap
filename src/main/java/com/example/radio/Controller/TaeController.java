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

// 테스트용 컨트롤러입니다. 테스트용 페이지를 표시합니다. 
@Controller
public class TaeController {
  @Autowired
  EarthquakeRepository earthquakeRepository;

  @GetMapping("/testgroundOverlay")
  public String groundOverlaytest() {
    return "test/testgroundOverlay";
  }

  @GetMapping("/test2")
  public String test2() {

    return "test/testContourmap";
  }

  @GetMapping("/test")
  public String test() {

    return "test/testpinmap";
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
    return "test/testpinmap";
  }

}
