package com.matsadev.gamerank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matsadev.gamerank.models.Wishlist;
import com.matsadev.gamerank.repositories.WishlistRepository;

@Service
public class WishlistService {
    //insert e remove e findAll
    @Autowired
    private WishlistRepository repository;

    public List<Wishlist> findAll() {
        return repository.findAll();
    }


}
