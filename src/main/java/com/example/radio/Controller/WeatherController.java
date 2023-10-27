package com.example.radio.Controller;


import com.example.radio.Model.Weather;
import com.example.radio.Repository.WeatherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/weather")
public class WeatherController {

    @Autowired
    WeatherRepository weatherRepository;

    @GetMapping("wea")
    public String wae() {



        return "/weather/wea";
    }


    @GetMapping("/weather")
    @ResponseBody
    public List<Weather> weather(@ModelAttribute Weather weather) {

       List<Weather> weatherList = weatherRepository.findAll();

        return weatherList;
    }


    @GetMapping("test")
    public  String test () {
        return "/weather/test";
    }
}
