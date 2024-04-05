package com.matsadev.gamerank.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.matsadev.gamerank.models.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
    
}
