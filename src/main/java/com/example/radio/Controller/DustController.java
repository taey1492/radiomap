package com.example.radio.Controller;

import com.example.radio.Repository.DustRepositoy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/dust")
public class DustController {

    @Autowired
    DustRepositoy dustRepositoy;

    @GetMapping("/dust")
    public String Dust() {

        // List<Dust> a = dustRepository.findAll();

        // for (Dust dust : a) {
        // String code = dust.getCode();
        // }

        return "/dust/dust";
    }

}
