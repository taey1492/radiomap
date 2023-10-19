package com.example.radio.Controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RadioMapController {

    @GetMapping("/index")
    public String home () {
        return "/kakaomap";
    }


}
