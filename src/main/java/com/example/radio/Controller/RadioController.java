package com.example.radio.Controller;

import com.example.radio.Model.RadioData;
import com.example.radio.Model.RadioMap;
import com.example.radio.Repository.RadioAddressRepository;
import com.example.radio.Repository.RadioDataRepository;
import com.example.radio.Repository.RadioMapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/map")
public class RadioController {

    @Autowired
    RadioDataRepository radioDataRepository;
    @Autowired
    RadioMapRepository radioMapRepository;
    @Autowired
    RadioAddressRepository radioAddressRepository;

    @GetMapping("index")
    public String index() {
        return "map/index";
    }

    @GetMapping("testy")
    @ResponseBody
    public List<RadioMap> index(@ModelAttribute RadioMap radioMap) {

        List<RadioMap> radioMapList = radioMapRepository.findAll();

        return radioMapList;

    }

    @GetMapping("test")
    public String test() {
        return "/map/test";
    }

    @PostMapping("/radiosearch")
    @ResponseBody
    public List<RadioData> yearSearch(@RequestParam int year) {

        List<RadioData> radiolist = radioDataRepository.findByYear(year);
        System.out.println(radiolist);
        return radiolist;
    }
}
