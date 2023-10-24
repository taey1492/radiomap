package com.example.radio.Controller;

import com.example.radio.Model.RadioData;
import com.example.radio.Model.RadioMap;
import com.example.radio.Repository.RadioDataRepository;
import com.example.radio.Repository.RadioMapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("testy")
    @ResponseBody
    public List<RadioMap> index(@ModelAttribute RadioMap radioMap) {

        List<RadioMap> radiomaplist = radioMapRepository.findAll();

        return radiomaplist;
    }

    @GetMapping("/test")
    public String test0() {

        return "/map/test";
    }

    @PostMapping("/testy")
    public String indexPost(@ModelAttribute RadioMap radioMap) {

        return "redirect:/map/testy";
    }

}
