package com.example.radio.Controller;

import java.util.ArrayList;
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

  // year로 검색하는 영역
  @GetMapping("/yearsearch")
  @ResponseBody
  public List<Earthquake> yearOut(@RequestParam int year) {

    List<Earthquake> eqList = earthquakeRepository.findAllByEqyear(year);

    return eqList;
  }

  // year, ,month, day 로 검색하는 영역(테스트중, 연결된것없음)
  @GetMapping("/search")
  @ResponseBody
  public List<Earthquake> search(@RequestParam int year, int month, int day) {

    List<Earthquake> eqyear = earthquakeRepository.findAllByEqyear(year);
    List<Earthquake> eqmonth = earthquakeRepository.findAllByEqmonth(month);
    List<Earthquake> eqday = earthquakeRepository.findAllByEqday(day);

    List<Earthquake> eqList = new ArrayList<>();
    eqyear.addAll(eqday);
    eqyear.addAll(eqmonth);
    eqyear.addAll(eqday);

    System.out.println(eqList);
    return eqList;
  }

}
