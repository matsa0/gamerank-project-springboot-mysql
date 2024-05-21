package com.matsadev.gamerank.config;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.matsadev.gamerank.models.Game;
import com.matsadev.gamerank.models.Review;
import com.matsadev.gamerank.models.User;
import com.matsadev.gamerank.repositories.GameRepository;
import com.matsadev.gamerank.repositories.ReviewRepository;
import com.matsadev.gamerank.repositories.UserRepository;

import aj.org.objectweb.asm.TypeReference;



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

        User u1 = new User(null, "matsa", "6337311", null, null);
        userRepository.save(u1);

        User u2 = new User(null, "admin", "admin", null, null);
        userRepository.save(u2);
        /* 
        Game g1 = new Game(null, "Resident Evil 4", "2005", "Survival Horror", 0, "https://cdn2.steamgriddb.com/thumb/4c55cc422cab2389c9f1d88eda34da57.jpg", "Resident Evil 4 segue Leon S. Kennedy em uma missão para resgatar a filha do presidente dos EUA, que foi sequestrada por um culto misterioso na Europa. O jogo é elogiado por sua jogabilidade inovadora e atmosfera envolvente.", null, null);
        Game g2 = new Game(null, "Resident Evil Village", "2021", "Survival Horror", 0, "https://cdn2.steamgriddb.com/thumb/f5d01993fbb44f107bb340e433df194f.jpg", "Os jogadores enfrentarão horrores em uma vila misteriosa enquanto tentam resgatar sua filha sequestrada. Resident Evil Village é elogiado por sua atmosfera envolvente e design de níveis.", null, null);
        Game g3 = new Game(null, "Dark Souls", "2011", "Souls Like", 0, "https://cdn2.steamgriddb.com/thumb/4ddc45a9de1065695a90e87be37471c0.jpg", "Dark Souls é conhecido por sua dificuldade elevada, atmosfera sombria e narrativa misteriosa. O jogo enfatiza a exploração e o combate estratégico.", null, null);
        Game g4 = new Game(null, "Dark Souls III", "2016", "Souls Like", 0, "https://cdn2.steamgriddb.com/thumb/9085f5ef67f2f7f0f38e869ffb5016a1.jpg", "Dark Souls III aprimora os gráficos e a jogabilidade da série, oferecendo uma experiência emocionante para os fãs. O jogo inclui DLCs que expandem ainda mais a narrativa.", null, null);
        Game g5 = new Game(null, "Bloodborne", "2015", "Souls Like", 0, "https://cdn2.steamgriddb.com/thumb/021399af062379408df9c358a1a83cdb.jpg", "Bloodborne é conhecido por sua jogabilidade desafiadora, atmosfera macabra e design de níveis intricado. O jogo é ambientado em um mundo gótico-horror e é altamente elogiado pela crítica.", null, null);
        Game g6 = new Game(null, "Crash Bandicoot 3: Warped", "1998", "Plataforma", 0, "https://cdn2.steamgriddb.com/thumb/04514b9893dd1719269aea025015ebe9.jpg", "Warped introduz habilidades especiais e veículos para Crash, além de uma variedade de fases diferentes. O jogo é considerado um ponto alto na série Crash Bandicoot.", null, null);
        Game g7 = new Game(null, "Crash Bandicoot: The Wrath of Cortex'", "2001", "Plataforma", 0, "https://cdn2.steamgriddb.com/thumb/8f525be9215d86f58355460286cccd32.jpg", "Warped introduz habilidades especiais e veículos para Crash, além de uma variedade de fases diferentes. O jogo é considerado um ponto alto na série Crash Bandicoot.", null, null);
        Game g8 = new Game(null, "Crash Twinsanity", "2004", "Aventura", 0, "https://cdn2.steamgriddb.com/thumb/2d76b54ba6edfbfbf547c7c2e76ed586.jpg", "Twinsanity apresenta uma narrativa única e humorística, mantendo a jogabilidade clássica da série. Os jogadores exploram ambientes abertos e participam de várias interações entre Crash e Cortex.", null, null);
        Game g9 = new Game(null, "Crash of the Titans", "2007", "Ação", 0, "https://cdn2.steamgriddb.com/thumb/bc6dec9604a8492c23cbd2a647918586.png", "Crash of the Titans introduz mecânicas de combate mais robustas e a capacidade de controlar inimigos. O jogo mantém o estilo humorístico da série Crash Bandicoot.", null, null);
        Game g10 = new Game(null, "Bloodborne", "2015", "Souls Like", 0, "https://cdn2.steamgriddb.com/thumb/021399af062379408df9c358a1a83cdb.jpg", "Bloodborne é conhecido por sua jogabilidade desafiadora, atmosfera macabra e design de níveis intricado. O jogo é ambientado em um mundo gótico-horror e é altamente elogiado pela crítica.", null, null);
        Game g11 = new Game(null, "Bloodborne", "2015", "Souls Like", 0, "https://cdn2.steamgriddb.com/thumb/021399af062379408df9c358a1a83cdb.jpg", "Bloodborne é conhecido por sua jogabilidade desafiadora, atmosfera macabra e design de níveis intricado. O jogo é ambientado em um mundo gótico-horror e é altamente elogiado pela crítica.", null, null);
        Game g12 = new Game(null, "Bloodborne", "2015", "Souls Like", 0, "https://cdn2.steamgriddb.com/thumb/021399af062379408df9c358a1a83cdb.jpg", "Bloodborne é conhecido por sua jogabilidade desafiadora, atmosfera macabra e design de níveis intricado. O jogo é ambientado em um mundo gótico-horror e é altamente elogiado pela crítica.", null, null);
        Game g13 = new Game(null, "Bloodborne", "2015", "Souls Like", 0, "https://cdn2.steamgriddb.com/thumb/021399af062379408df9c358a1a83cdb.jpg", "Bloodborne é conhecido por sua jogabilidade desafiadora, atmosfera macabra e design de níveis intricado. O jogo é ambientado em um mundo gótico-horror e é altamente elogiado pela crítica.", null, null);


        List<Game> games = Arrays.asList(g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13);
        gameRepository.saveAll(games);

        Review r1 = new Review(null, "Very good game", 5, u1, g1);
        reviewRepository.save(r1);

        g1.setReviews(new HashSet<>());
        g1.getReviews().add(r1);
        gameRepository.save(g1);
        */
        ///////////////////////////////////////////////////////////////////////

        //used to convert a json into a Game 
        ObjectMapper mapper = new ObjectMapper(); 
        List<Game> gamesList = new ArrayList<>();
        InputStream inputStream = TypeReference.class.getResourceAsStream("/games_db/gamesdb.json");

        try {
            //maps Json content to the specified type
            JsonNode rootNode = mapper.readTree(inputStream);
            JsonNode gamesNode = rootNode.path("jogos");
            
            if(gamesNode.isArray()) {
                for(JsonNode gameNode : gamesNode) {
                    String name = gameNode.path("nome").asText();
                    String releaseYear = gameNode.path("anoDeLancamento").asText();
                    String genre = gameNode.path("genero").asText();
                    String urlImage = gameNode.path("urlImagem").asText();
                    String description = gameNode.path("descricao").asText();

                    gamesList.add(new Game(null, name, releaseYear, genre, 0, urlImage, description, null, null));
                }
            }
        }
        catch(IOException e) {
            e.printStackTrace();	
        }

        gameRepository.saveAll(gamesList);
    }
    
}
