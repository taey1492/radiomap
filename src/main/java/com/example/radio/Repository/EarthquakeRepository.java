package com.example.radio.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.radio.Model.Earthquake;

@Repository
public interface EarthquakeRepository extends JpaRepository<Earthquake, Integer> {

  List<Earthquake> findAllByEqyear(int year);

  List<Earthquake> findAllByEqmonth(int month);

  List<Earthquake> findAllByEqday(int day);

}
