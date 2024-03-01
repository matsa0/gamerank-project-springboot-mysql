package com.matsadev.gamerank.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.matsadev.gamerank.entities.User;
import com.matsadev.gamerank.repositories.UserRepository;
import com.matsadev.gamerank.services.exceptions.ResourceNotFoundException;

@Service
public class UserService {
    
    @Autowired
    private UserRepository repository;

    public User findById(@PathVariable Long id) {
        try {
            Optional<User> obj = repository.findById(id);
            return obj.get();
        } 
        catch(NoSuchElementException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    public List<User> findAll() {
        List<User> list = repository.findAll();
        return list;
    }

    public User insert(User user) {
        return repository.save(user);
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        }
        catch(RuntimeException e) {
            throw new ResourceNotFoundException(id);
        }
    }
}
