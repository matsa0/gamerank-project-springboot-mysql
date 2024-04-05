package com.matsadev.gamerank.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matsadev.gamerank.models.User;
import com.matsadev.gamerank.models.dtos.UserDto;
import com.matsadev.gamerank.repositories.UserRepository;
import com.matsadev.gamerank.services.exceptions.ResourceNotFoundException;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User findById(Long id) {
        Optional<User> obj = repository.findById(id);

        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }

    public List<User> findAll() {
        List<User> list = repository.findAll();
        return list;
    }

    public User insert(UserDto dto) {
        User newUser = new User(dto);
        
        return repository.save(newUser);
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
