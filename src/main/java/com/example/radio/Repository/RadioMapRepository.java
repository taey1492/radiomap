package com.example.radio.Repository;

import com.example.radio.Model.Radiomap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RadioMapRepository extends JpaRepository<Radiomap, Integer> {

    List<Radiomap> findAllById(int id);
}
