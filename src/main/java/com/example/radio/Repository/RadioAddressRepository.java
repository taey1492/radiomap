package com.example.radio.Repository;

import com.example.radio.Model.RadioAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RadioAddressRepository extends JpaRepository<RadioAddress, String> {

}
