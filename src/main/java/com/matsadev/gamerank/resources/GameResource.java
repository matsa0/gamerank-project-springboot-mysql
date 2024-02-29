package com.matsadev.gamerank.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.matsadev.gamerank.entities.Game;
import com.matsadev.gamerank.services.GameService;

import jakarta.annotation.Resource;

@Resource
@RestController
@RequestMapping("/games")
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

        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<Game> insert(@RequestBody Game game) {
        game = service.insert(game);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(game.getId()).toUri();
        return ResponseEntity.created(uri).body(game); //Retorna a resposta HTTP adequada 201 CREATED
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);

        return ResponseEntity.noContent().build(); //Retorna a resposta HTTP correta
    }

    @PutMapping("/{id}")
    public ResponseEntity<Game> update(@PathVariable Long id, @RequestBody Game game) {
        Game obj = service.update(id, game);

        return ResponseEntity.ok().body(obj);
    }
}
