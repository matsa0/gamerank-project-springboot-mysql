package com.matsadev.gamerank.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.matsadev.gamerank.models.Wishlist;
import com.matsadev.gamerank.models.pk.WishlistPk;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, WishlistPk> {
    
}
