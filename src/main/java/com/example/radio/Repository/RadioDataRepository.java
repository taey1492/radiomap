package com.example.radio.Repository;

import com.example.radio.Model.RadioData;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RadioDataRepository extends JpaRepository<RadioData, Integer> {

     List<RadioData> findBypinnacle(String pinnacle);
}
