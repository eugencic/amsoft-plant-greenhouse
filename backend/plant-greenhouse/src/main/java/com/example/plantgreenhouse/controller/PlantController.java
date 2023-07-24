package com.example.plantgreenhouse.controller;

import com.example.plantgreenhouse.mapper.PlantMapper;
import com.example.plantgreenhouse.model.Plant;
import com.example.plantgreenhouse.model.dto.PlantDto;
import com.example.plantgreenhouse.repository.PlantRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/plant")
public class PlantController {
    @Autowired
    private PlantRepository plantRepository;

    @Autowired
    private PlantMapper plantMapper;

    @GetMapping
    public ResponseEntity<List<Plant>> getAllPlants() {
        List<Plant> plants = plantRepository.findAll();
        return new ResponseEntity<>(plants, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Plant> getPlantById(@PathVariable Integer id) {
        Optional<Plant> optionalPlant = plantRepository.findById(id);

        if (optionalPlant.isPresent()) {
            Plant plant = optionalPlant.get();
            return new ResponseEntity<>(plant, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Plant> insertPlant(@RequestBody @Valid PlantDto plantDto) {
        Plant plant = plantMapper.toEntity(plantDto);
        Plant insertedPlant = plantRepository.save(plant);
        return new ResponseEntity<>(insertedPlant, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Plant> updatePlant(@RequestBody @Valid PlantDto plantDto) {
        Plant plant = plantMapper.toEntity(plantDto);
        Plant insertedPlant = plantRepository.save(plant);
        return new ResponseEntity<>(insertedPlant, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllPlants() {
        plantRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlantById(@PathVariable Integer id) {
        Optional<Plant> optionalPlant = plantRepository.findById(id);

        if (optionalPlant.isPresent()) {
            plantRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
