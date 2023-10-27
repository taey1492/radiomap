package com.example.radio.Repository;

import com.example.radio.Model.RadioData;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RadioDataRepository extends JpaRepository<RadioData, Integer> {

     List<RadioData> findByYear(int year);

}
