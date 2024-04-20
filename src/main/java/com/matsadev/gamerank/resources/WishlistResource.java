package com.matsadev.gamerank.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matsadev.gamerank.models.Wishlist;
import com.matsadev.gamerank.services.WishlistService;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;


@Resource
@RestController
@RequestMapping("/wishlists")
public class WishlistResource {
    
    @Autowired
    private WishlistService service;

    @GetMapping
    public ResponseEntity<List<Wishlist>> findAll() {
        return new ResponseEntity<>(service.findAll() , HttpStatus.OK);
    }
}
