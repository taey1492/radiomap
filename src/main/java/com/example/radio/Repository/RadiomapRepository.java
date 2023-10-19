package com.example.radio.Repository;


import com.example.radio.Model.Radiomap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RadiomapRepository extends JpaRepository<Radiomap, Integer> {

}
