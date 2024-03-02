package com.matsadev.gamerank.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.matsadev.gamerank.entities.Review;
import com.matsadev.gamerank.repositories.ReviewRepository;
import com.matsadev.gamerank.services.exceptions.ResourceNotFoundException;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ReviewService {
    
    @Autowired
    private ReviewRepository repository;

    public Review findById(@PathVariable Long id) {
        try {
            Optional<Review> obj = repository.findById(id);
            return obj.get();
        } catch(NoSuchElementException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    public List<Review> findAll() {
        return repository.findAll();
    }

    public Review insert(@RequestBody Review review) {
        Review obj = repository.save(review);
        return obj;
    }

    public void delete(@PathVariable Long id) {
        try {
            repository.deleteById(id);  
        } catch(RuntimeException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    public Review update(@PathVariable Long id, @RequestBody Review r) {
        try {
            Review entity = repository.getReferenceById(id);
            updateData(entity, r);
            return repository.save(entity);
        } catch(EntityNotFoundException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    public void updateData(@RequestBody Review entity, @RequestBody Review r) {
        entity.setComment(r.getComment());
        entity.setNote(r.getNote());
    }
}
