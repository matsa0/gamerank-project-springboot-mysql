package com.matsadev.gamerank.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.matsadev.gamerank.entities.Wishlist;
import com.matsadev.gamerank.repositories.WishlistRepository;
import com.matsadev.gamerank.services.exceptions.ResourceNotFoundException;


@Service
public class WishlistService {
     
    @Autowired
    private WishlistRepository repository;

    public Wishlist findById(@PathVariable Long id) {
        try {
            Optional<Wishlist> obj = repository.findById(id);
            return obj.get();
        } catch(NoSuchElementException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    public List<Wishlist> findAll() {
        return repository.findAll();
    }

    public Wishlist insert(@RequestBody Wishlist wishlist) {
        Wishlist obj = repository.save(wishlist);
        return obj;
    }

    public void delete(@PathVariable Long id) {
        try {
            repository.deleteById(id);  
        } catch(RuntimeException e) {
            throw new ResourceNotFoundException(id);
        }
    }

}
