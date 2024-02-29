package com.matsadev.gamerank.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.matsadev.gamerank.entities.Game;
import com.matsadev.gamerank.repositories.GameRepository;

@SuppressWarnings("unused")
@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private GameRepository gameRepository;

    @Override
    public void run(String... args) throws Exception {

/*         Game g1 = new Game();
        g1.setId(null);
        g1.setName("Resident Evil 4");
        g1.setYear(2005);
        g1.setGenre("Survival Horror");
        g1.setShort_desc("Resident Evil 4 segue Leon S. Kennedy em uma missão para resgatar a filha do presidente dos EUA, que foi sequestrada por um culto misterioso na Europa. O jogo é elogiado por sua jogabilidade inovadora e atmosfera envolvente.");
        g1.setLong_desc("Resident Evil 4 é um jogo de survival horror lançado pela Capcom em 2005 para várias plataformas. Ele marca uma mudança significativa na jogabilidade da série, com um foco maior na ação e uma perspectiva de terceira pessoa sobre o ombro.'");
    
        gameRepository.save(g1); */
    
    }
    
}
