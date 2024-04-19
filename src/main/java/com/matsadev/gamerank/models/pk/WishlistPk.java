package com.matsadev.gamerank.models.pk;

import java.io.Serializable;

import com.matsadev.gamerank.models.Game;
import com.matsadev.gamerank.models.User;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Embeddable
public class WishlistPk implements Serializable{
    public static final long serialVersionUID = 1L;

    @OneToOne //Uma wishlist para um usuário
    private User user;

    @ManyToOne() //Muitas wishlists para um jogo
    @JoinColumn(name = "game_id")
    private Game game;
}
