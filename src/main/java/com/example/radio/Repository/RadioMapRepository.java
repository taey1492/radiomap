package com.example.radio.Repository;


import com.example.radio.Model.Earthquake;
import com.example.radio.Model.RadioMap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RadioMapRepository extends JpaRepository<RadioMap, Integer> {



    List<RadioMap> findAllById(int id);
}
