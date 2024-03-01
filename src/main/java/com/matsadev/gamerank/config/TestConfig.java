package com.matsadev.gamerank.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.matsadev.gamerank.entities.Game;
import com.matsadev.gamerank.entities.User;
import com.matsadev.gamerank.repositories.GameRepository;
import com.matsadev.gamerank.repositories.UserRepository;

@SuppressWarnings("unused")
@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        
        User u2 = new User(null, "matsa", "6337311");
        userRepository.save(u2);
    }
    
}
