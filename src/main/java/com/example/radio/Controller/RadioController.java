package com.example.radio.Controller;

import com.example.radio.Model.RadioAddress;
import com.example.radio.Model.RadioData;
import com.example.radio.Model.RadioMap;
import com.example.radio.Repository.RadioAddressRepository;
import com.example.radio.Repository.RadioDataRepository;
import com.example.radio.Repository.RadioMapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

        System.out.println(radioMapList);
        return radioMapList;

    }


    @GetMapping("test")
    public String test () {
        return "/map/test";
    }

    @PostMapping("/radio")
    @ResponseBody
    public List<Map<String, Object>> test1(@RequestParam int year, int month) {
        List<RadioData> radioDataList = radioDataRepository.findByYearAndMonth(year, month);
        List<Map<String, Object>> result = new ArrayList<>();

        for (RadioData radioData : radioDataList) {
            String radiolist = radioData.getPinnacle();
            List<RadioAddress> radioAddressesData = radioAddressRepository.findByPinnacle(radiolist);

            for(RadioAddress radioAddress : radioAddressesData ) {
                String addressCode = radioAddress.getCode();
                List<RadioMap> radioMapList = radioMapRepository.findByCode(addressCode);

                for(RadioMap radioMap : radioMapList) {
                    Float maplat = radioMap.getLat();
                    Float maplon = radioMap.getLon();

                    Map<String, Object> map = new HashMap<>();
                    map.put("radioData", radioData);
                    map.put("lat", maplat);
                    map.put("lon", maplon);

                    result.add(map);
                }
            }


        }
        return result;






    }
}
