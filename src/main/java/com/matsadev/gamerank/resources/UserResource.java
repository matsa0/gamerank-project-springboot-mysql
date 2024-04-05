package com.matsadev.gamerank.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matsadev.gamerank.models.User;
import com.matsadev.gamerank.models.dtos.UserDto;
import com.matsadev.gamerank.services.UserService;

import jakarta.annotation.Resource;
import jakarta.validation.Valid;

@Resource
@RestController
@RequestMapping("/users")
@CrossOrigin("http://localhost:3000")
public class UserResource {
    
    @Autowired
    private UserService service;

    @GetMapping
    public ResponseEntity<List<User>> findAll() {
        List<User> list = service.findAll();
        
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable Long id) {
        User obj = service.findById(id);
        
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
    
    @PostMapping
    public ResponseEntity<User> insert(@RequestBody @Valid UserDto dto) {
        User newUser = service.insert(dto);

        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        
        return ResponseEntity.noContent().build();
    }
}
