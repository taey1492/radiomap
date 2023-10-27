package com.example.radio.Repository;

import com.example.radio.Model.Dust;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DustRepositoy extends JpaRepository<Dust, Integer> {




}
