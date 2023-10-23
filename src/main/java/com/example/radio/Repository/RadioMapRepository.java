package com.example.radio.Repository;


import com.example.radio.Model.RadioMap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RadioMapRepository extends JpaRepository<RadioMap, Integer> {
}
