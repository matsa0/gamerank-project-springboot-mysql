package com.matsadev.gamerank.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.matsadev.gamerank.entities.Wishlist;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, Long>{
    
}
