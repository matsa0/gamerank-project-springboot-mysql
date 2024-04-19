package com.matsadev.gamerank.config;

import java.util.HashSet;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.matsadev.gamerank.models.Game;
import com.matsadev.gamerank.models.Review;
import com.matsadev.gamerank.models.User;
import com.matsadev.gamerank.repositories.GameRepository;
import com.matsadev.gamerank.repositories.ReviewRepository;
import com.matsadev.gamerank.repositories.UserRepository;



@SuppressWarnings("unused")
@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private GameRepository gameRepository;
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public void run(String... args) throws Exception {

        User u1 = new User(null, "matsa", "6337311", null);
        userRepository.save(u1);

        Game g1 = new Game(null, "Snake Game", 1987, "Puzzle", 0, null, "Eat all the apples!", null);
        gameRepository.save(g1);

        Review r1 = new Review(null, "Very good game", 5, u1, g1);
        reviewRepository.save(r1);

        g1.setReviews(new HashSet<>());
        g1.getReviews().add(r1);
        gameRepository.save(g1);
      
    }
    
}
