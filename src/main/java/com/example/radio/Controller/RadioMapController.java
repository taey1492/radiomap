package com.example.radio.Controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.example.radio.Model.Radiodata;
import com.example.radio.Repository.RadioDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;


@Controller
@RequestMapping("/map")
public class RadioMapController {

    @Autowired
    RadioDataRepository radioDataRepository;

    @GetMapping("/index")

    public String index() {

        return "/map/index";
    }

    @PostMapping("/index")
    public String indexPost(@ModelAttribute Radiodata radiodata) {

        String pinnacle = radiodata.getR_pinnacle();

        System.out.println(pinnacle);


      List<Radiodata> radiodatalist = radioDataRepository.findByr_pinnacle(pinnacle);




        for (Radiodata radiodata1 : radiodatalist) {
            System.out.println(radiodata1);
        }




        return"redirect:/mpa/index";
    }

}
