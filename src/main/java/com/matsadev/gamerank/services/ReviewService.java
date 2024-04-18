package com.matsadev.gamerank.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matsadev.gamerank.models.Review;
import com.matsadev.gamerank.models.dtos.ReviewDto;
import com.matsadev.gamerank.repositories.ReviewRepository;
import com.matsadev.gamerank.services.exceptions.ResourceNotFoundException;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ReviewService {
    
    @Autowired
    private ReviewRepository repository;

    public Review findById(Long id) {
        Optional<Review> obj = repository.findById(id);

        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }

    public List<Review> findAll() {
        return repository.findAll();
    }

    public Review insert(ReviewDto dto) {
        Review obj = new Review(dto);

        return repository.save(obj);
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        }
        catch(RuntimeException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    public Review update(Long id, Review review) {
        try {
            Review obj = repository.getReferenceById(id);
            updateData(obj, review);
            return repository.save(review);
        }
        catch(EntityNotFoundException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    public void updateData(Review entity, Review review) {
        entity.setRate(review.getRate());
        entity.setReview(review.getReview());
    }
}
