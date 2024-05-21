package com.matsadev.gamerank.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matsadev.gamerank.models.Game;
import com.matsadev.gamerank.models.dtos.GameDto;
import com.matsadev.gamerank.services.GameService;
import jakarta.annotation.Resource;
import jakarta.validation.Valid;

@Resource
@RestController
@RequestMapping("/games")
@CrossOrigin("http://localhost:3000") //connecting back-end to front-end
public class GameResource {
    
    @Autowired
    private GameService service;

    @GetMapping("/{id}")
    public ResponseEntity<Game> findById(@PathVariable Long id) {
        Game obj = service.findById(id);

        return ResponseEntity.ok().body(obj);
    }

    @GetMapping
    public ResponseEntity<List<Game>> findAll() {
        List<Game> list = service.findAll();

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/genre/{genre}")
    public ResponseEntity<List<Game>> findGamesByGenre(@PathVariable(value = "genre", required = false) String genre) {
        List<Game> list;

        if(genre != null) {
            list = service.findGamesByGenre(genre);
        } else {
            list = service.findAll();
        }
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Game> insert(@RequestBody @Valid GameDto dto) {
        Game newGame = service.insert(dto);

        return new ResponseEntity<>(newGame, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);

        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Game> update(@PathVariable Long id, @RequestBody Game game) {
        Game obj = service.update(id, game);

        return ResponseEntity.ok().body(obj);
    }
}
