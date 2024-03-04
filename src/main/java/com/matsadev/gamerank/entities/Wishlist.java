package com.matsadev.gamerank.entities;


import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "wishlists")
public class Wishlist implements Serializable {
    public static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private User user;

    @ManyToMany
    @JoinTable(
        name = "wishlist_game",
        joinColumns = @JoinColumn(name = "wishlist_user_id"),
        inverseJoinColumns = @JoinColumn(name = "wishlist_game_id")
    )
    private Set<Game> games = new HashSet<>();


    public Wishlist() {
    }

    public Wishlist(User user, Set<Game> games) {
        this.user = user;
        this.games = games;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public Set<Game> getGames() {
        return games;
    }


}
