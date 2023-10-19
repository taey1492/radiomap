package com.example.radio.Repository;

import com.example.radio.Model.Radiodata;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RadioDataRepository extends JpaRepository<Radiodata ,Integer> {

}
