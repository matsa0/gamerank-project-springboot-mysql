package com.matsadev.gamerank.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.matsadev.gamerank.entities.Game;
import com.matsadev.gamerank.repositories.GameRepository;
import com.matsadev.gamerank.services.exceptions.ResourceNotFoundException;

import jakarta.persistence.EntityNotFoundException;

@Service
public class GameService {
    
    @Autowired
    private GameRepository repository;

    public Game findById(@PathVariable Long id) {
        try {
            Optional<Game> obj = repository.findById(id);
    
            return obj.get();
        } catch(NoSuchElementException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    public List<Game> findAll() {
        return repository.findAll();
    }

    public Game insert(@RequestBody Game game) {
        return repository.save(game);
    }

    public void delete(@PathVariable Long id) {
        try {
            repository.deleteById(id);
        } catch(RuntimeException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    public Game update(@PathVariable Long id, @RequestBody Game game) {
        try {
            Game entity = repository.getReferenceById(id);
            updateData(entity, game);
            return repository.save(entity);
        } catch(EntityNotFoundException e) {
            throw new ResourceNotFoundException(id);    
        }
    }

    public void updateData(@RequestBody Game entity, @RequestBody Game game) {
        entity.setName(game.getName());
        entity.setYear(game.getYear());
        entity.setGenre(game.getGenre());
        entity.setShort_desc(game.getShort_desc());
        entity.setLong_desc(game.getLong_desc());
    }
}
