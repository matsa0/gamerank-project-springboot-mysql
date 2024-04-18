package com.matsadev.gamerank.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matsadev.gamerank.models.Review;
import com.matsadev.gamerank.models.dtos.ReviewDto;
import com.matsadev.gamerank.services.ReviewService;

import jakarta.annotation.Resource;
import jakarta.validation.Valid;

@Resource
@RestController
@RequestMapping("/reviews")
@CrossOrigin("http://localhost:3000")
public class ReviewResource {
    
    @Autowired
    private ReviewService service;

    @GetMapping
    public ResponseEntity<List<Review>> findAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Review> findById(@PathVariable Long id) {
        return new ResponseEntity<>(service.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Review> insert(@RequestBody @Valid ReviewDto dto) {
        Review obj = service.insert(dto);

        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);

        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Review> update(@RequestBody Review review, @PathVariable Long id) {
        return new ResponseEntity<>(service.update(id, review), HttpStatus.OK);
    }


}
