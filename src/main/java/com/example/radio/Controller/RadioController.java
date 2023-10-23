package com.example.radio.Controller;


import com.example.radio.Model.RadioData;
import com.example.radio.Repository.RadioDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/map")
public class RadioController {

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

}
