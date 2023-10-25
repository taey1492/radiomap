package com.example.radio.Repository;

import com.example.radio.Model.RadioAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RadioAddressRepository extends JpaRepository<RadioAddress, Integer> {


    List<RadioAddress> findByCode(String code);
    List<RadioAddress> findByPinnacle(String pinnacle);

}
