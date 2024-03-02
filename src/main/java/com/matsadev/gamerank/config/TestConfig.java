package com.matsadev.gamerank.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.matsadev.gamerank.entities.Game;
import com.matsadev.gamerank.entities.Review;
import com.matsadev.gamerank.entities.User;
import com.matsadev.gamerank.repositories.GameRepository;
import com.matsadev.gamerank.repositories.ReviewRepository;
import com.matsadev.gamerank.repositories.UserRepository;


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
        
        Optional<Game> optG1 = gameRepository.findById((long) 1);
        Optional<User> optU1 = userRepository.findById((long) 1);

        Game g1 = optG1.get();
        User u1 = optU1.get();

        Review r1 = new Review(u1, g1, null, "Resident Evil 4 é uma experiência incrível.", 5);

        reviewRepository.save(r1);
    }
    
}
