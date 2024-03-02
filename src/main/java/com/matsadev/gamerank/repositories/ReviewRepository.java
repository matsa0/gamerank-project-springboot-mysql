package com.matsadev.gamerank.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.matsadev.gamerank.entities.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long>{
    
}
