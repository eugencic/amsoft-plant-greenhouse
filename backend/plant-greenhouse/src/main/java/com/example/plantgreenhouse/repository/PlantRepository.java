package com.example.plantgreenhouse.repository;

import com.example.plantgreenhouse.model.Plant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Integer> {

}
