package com.example.radio.Repository;

import com.example.radio.Model.Radiodata;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface RadioDataRepository extends JpaRepository<Radiodata , Integer> {




    List<Radiodata> findByr_pinnacle(String pinnacle);
}
