package com.matsadev.gamerank.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.matsadev.gamerank.entities.Wishlist;
import com.matsadev.gamerank.services.WishlistService;

import jakarta.annotation.Resource;

@Resource
@RestController
@RequestMapping("/wishlists")
public class WishlistResource {

    @Autowired
    private WishlistService service;

    @GetMapping("/{id}")
    public ResponseEntity<Wishlist> findById(@PathVariable Long id) {
        Wishlist obj = service.findById(id);

        return ResponseEntity.ok().body(obj);
    }

    @GetMapping
    public ResponseEntity<List<Wishlist>> findAll() {
        List<Wishlist> list = service.findAll();

        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<Wishlist> insert(@RequestBody Wishlist wishlist) {
        wishlist = service.insert(wishlist);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(wishlist.getId()).toUri();

        return ResponseEntity.created(uri).body(wishlist); //Retorna a resposta HTTP adequada 201 CREATED
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);

        return ResponseEntity.noContent().build();
    }
}
