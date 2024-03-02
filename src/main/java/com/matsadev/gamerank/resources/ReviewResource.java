package com.matsadev.gamerank.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.matsadev.gamerank.entities.Review;
import com.matsadev.gamerank.services.ReviewService;

import jakarta.annotation.Resource;

@Resource
@RestController
@RequestMapping("/reviews")
public class ReviewResource {
    
    @Autowired
    private ReviewService service;

    @GetMapping("/{id}")
    public ResponseEntity<Review> findById(@PathVariable Long id) {
        Review obj = service.findById(id);

        return ResponseEntity.ok().body(obj);
    }

    @GetMapping
    public ResponseEntity<List<Review>> findAll() {
        List<Review> list = service.findAll();

        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<Review> insert(@RequestBody Review review) {
        review = service.insert(review);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(review.getId()).toUri();

        return ResponseEntity.created(uri).body(review); //Retorna a resposta HTTP adequada 201 CREATED
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);

        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Review> update(@PathVariable Long id, @RequestBody Review r) {
        Review obj = service.update(id, r);

        return ResponseEntity.ok().body(obj);
    }
}
