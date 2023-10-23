package com.example.radio.Controller;

import com.example.radio.Model.RadioData;
import com.example.radio.Model.RadioMap;
import com.example.radio.Repository.RadioDataRepository;
import com.example.radio.Repository.RadioMapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/map")
public class RadioController {

    @Autowired
    RadioMapRepository radioMapRepository;

    @Autowired
    RadioDataRepository radioDataRepository;

    @GetMapping("/index")

    public String index() {

        return "/map/index";
    }

    @PostMapping("/index")
    public String indexPost(@ModelAttribute RadioData radiodata) {

        return "redirect:/mpa/index";
    }

    // @GetMapping("testy")
    // public String index(@ModelAttribute RadioMap radioMap, Model model) {

    // return "/map/testy";

    // }

    // @PostMapping("/testy")
    // public String indexPost(@ModelAttribute RadioMap radioMap, Model model) {

    // int i = radioMap.getId();

    // Optional<RadioMap> latlon = radioMapRepository.findById(i);

    // Float lat = latlon.get().getLat();
    // Float lon = latlon.get().getLon();

    // List<Float> l = new ArrayList<>();
    // l.add(lat);
    // l.add(lon);

    // model.addAttribute("latlonlist", l);

    // System.out.println(l);

    // return "redirect:/map/testy";
    // }

}
