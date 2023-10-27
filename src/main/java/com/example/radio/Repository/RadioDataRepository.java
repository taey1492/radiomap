package com.example.radio.Repository;

import com.example.radio.Model.RadioData;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RadioDataRepository extends JpaRepository<RadioData, Integer> {

     List<RadioData> findByYear(int year);

     // @Query(nativeQuery = true, value = "select * " + //
     // " from radio_data rd " + //
     // " left join radio_address ra " + //
     // " on rd.r_pinnacle = ra.r_pinnacle" + //
     // " left join radio_map rm " + //
     // " on ra.r_code = rm.r_code " + //
     // " where rd.r_year = :1")
     // List<Map<String, Object>> findByYear2(int year);
}
