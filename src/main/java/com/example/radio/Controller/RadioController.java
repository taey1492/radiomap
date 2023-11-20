package com.example.radio.Controller;

import com.example.radio.Model.Post;
import com.example.radio.Model.RadioData;
import com.example.radio.Model.RadioMap;
import com.example.radio.Repository.PostRepository;
import com.example.radio.Repository.RadioAddressRepository;
import com.example.radio.Repository.RadioDataRepository;
import com.example.radio.Repository.RadioMapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
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
    @Autowired
    PostRepository postRepository;

    @GetMapping("index")
    public String index(Model model) {

        List<Post> posts = postRepository.findAll();
        Post post;
        LocalDate today = LocalDate.now(); // 현재 날짜

        if (posts.isEmpty()) { // Post 객체가 없는 경우
            post = new Post(); // 새로운 Post 객체 생성
            post.setPost(1); // 처음 방문자 수는 1
            post.setDailyPost(1); // 일일 방문자도 1
            post.setLastUpdated(today);// 마지막 업데이트 날짜를 오늘로 설정
            postRepository.save(post); // 새로운 Post 객체 저장
        } else { // Post 객체가 있는 경우
            post = posts.get(0); // 첫 번째 Post 객체를 가져옵니다.
            // 마지막 업데이트 날짜와 오늘 날짜를 비교

            if (!post.getLastUpdated().isEqual(today)) {
                // 날짜가 바뀌었다면 일일 방문자 수를 초기화
                post.setDailyPost(0);
                post.setLastUpdated(today); // 마지막 업데이트 날짜를 오늘로 설정
            }

            post.setPost(post.getPost() + 1); // Post 값 증가
            post.setDailyPost(post.getDailyPost() + 1);
            postRepository.save(post); // 변경된 Post 객체 저장
        }

        model.addAttribute("post", post);

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
        // System.out.println(radiolist);
        return radiolist;
    }

    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping("/radiosearch2")
    @ResponseBody
    public List<Map<String, Object>> yearSearch2(@RequestParam int year) {
        String sql = "select * " +
                "from radio_data rd  " +
                "left join radio_address ra  " +
                "  on rd.r_pinnacle = ra.r_pinnacle " +
                "left join radio_map rm  " +
                "  on ra.r_code = rm.r_code  " +
                "where rd.r_year = ?";
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql, year);
        return list;
    }
}
