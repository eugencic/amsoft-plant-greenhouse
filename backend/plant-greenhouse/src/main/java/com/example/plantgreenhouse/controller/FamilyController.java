package com.example.plantgreenhouse.controller;

import com.example.plantgreenhouse.model.Family;
import com.example.plantgreenhouse.repository.FamilyRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/family")
public class FamilyController {
    @Autowired
    FamilyRepository familyRepository;

    @GetMapping
    public ResponseEntity<List<Family>> getAllFamilies() {
        List<Family> families = familyRepository.findAll();
        return new ResponseEntity<>(families, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Family> getFamilyById(@PathVariable Integer id) {
        Optional<Family> optionalFamily = familyRepository.findById(id);

        if (optionalFamily.isPresent()) {
            Family family = optionalFamily.get();
            return new ResponseEntity<>(family, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Family> insertFamily(@RequestBody @Valid Family family) {
        Family insertedFamily = familyRepository.save(family);
        return new ResponseEntity<>(insertedFamily, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Family> updateFamily(@RequestBody @Valid Family family) {
        Family insertedFamily = familyRepository.save(family);
        return new ResponseEntity<>(insertedFamily, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllFamilies() {
        familyRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFamilyById(@PathVariable Integer id) {
        Optional<Family> optionalFamily = familyRepository.findById(id);

        if (optionalFamily.isPresent()) {
            familyRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
