package com.matsadev.gamerank.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.matsadev.gamerank.entities.Game;
import com.matsadev.gamerank.repositories.GameRepository;

@Service
public class GameService {
    
    @Autowired
    private GameRepository repository;

    public Game findById(@PathVariable Long id) {
        Optional<Game> obj = repository.findById(id);

        return obj.get();
    }

    public List<Game> findAll() {
        return repository.findAll();
    }

    public Game insert(Game game) {
        return repository.save(game);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Game update(Long id, Game game) {
        Game entity = repository.getReferenceById(id);
        updateData(entity, game);
        return repository.save(entity);
    }

    public void updateData(Game entity, Game game) {
        entity.setName(game.getName());
        entity.setYear(game.getYear());
        entity.setGenre(game.getGenre());
        entity.setShort_desc(game.getShort_desc());
        entity.setLong_desc(game.getLong_desc());
    }
}
