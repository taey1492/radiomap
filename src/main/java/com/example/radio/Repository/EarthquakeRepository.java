package com.example.radio.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.radio.Model.Earthquake;

@Repository
public interface EarthquakeRepository extends JpaRepository<Earthquake, Integer> {

}
