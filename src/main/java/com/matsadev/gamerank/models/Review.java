package com.matsadev.gamerank.models;


import java.io.Serializable;

import com.matsadev.gamerank.models.dtos.ReviewDto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "reviews")
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@AllArgsConstructor
@NoArgsConstructor
public class Review implements Serializable {
    public static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String review;
    //mínimo e máximo para nota
    @Min(0) 
    @Max(5)
    private int rate;
    
    @ManyToOne //Muitas reviews para um usuário
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne //Muitas reviews para um jogo
    @JoinColumn(name = "game_id")
    private Game game;
    
    
    public Review(ReviewDto dto) {
        this.review = dto.review();
        this.rate = dto.rate();
    }
}
