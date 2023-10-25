package com.example.radio.Controller;

import com.example.radio.Model.Radiomap;
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

    @GetMapping("index")
    public String index() {
        return "map/index";
    }

    @GetMapping("testy")
    @ResponseBody
    public List<Radiomap> index(@ModelAttribute Radiomap radioMap) {

        List<Radiomap> radioMapList = radioMapRepository.findAll();

        return radioMapList;

    }

    @GetMapping("/test")
    public String test0() {

        return "/map/test";
    }

    @PostMapping("/testy")
    public String indexPost(@ModelAttribute Radiomap radioMap) {

        return "redirect:/map/testy";
    }

}
