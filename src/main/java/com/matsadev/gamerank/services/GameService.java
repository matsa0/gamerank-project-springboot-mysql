package com.matsadev.gamerank.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matsadev.gamerank.models.Game;
import com.matsadev.gamerank.repositories.GameRepository;
import com.matsadev.gamerank.services.exceptions.ResourceNotFoundException;

import jakarta.persistence.EntityNotFoundException;

@Service
public class GameService {
    
    @Autowired
    private GameRepository repository;

    public Game findById(Long id) {
        Optional<Game> obj = repository.findById(id);
    
        return obj.orElseThrow(() -> new ResourceNotFoundException(id)); //caso o optional estiver vazio ele lança a exceção 
    }

    public List<Game> findAll() {
        return repository.findAll();
    }

    public Game insert(Game game) {
        return repository.save(game);
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        } catch(RuntimeException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    public Game update(Long id, Game game) {
        try {
            Game entity = repository.getReferenceById(id);
            updateData(entity, game);
            return repository.save(entity);
        } catch(EntityNotFoundException e) {
            throw new ResourceNotFoundException(id);    
        }
    }

    public void updateData(Game entity, Game game) {
        entity.setName(game.getName());
        entity.setRelease_year(game.getRelease_year());
        entity.setGenre(game.getGenre());
        entity.setDescription(game.getDescription());
    }
}
