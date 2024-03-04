package com.matsadev.gamerank.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "games")
public class Game implements Serializable {
    public static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int year;
    private String genre;
    private double avg_note;
    private String url_imagem;

    @Column(length = 400)
    private String short_desc;

    @Column(length = 1200)
    private String long_desc;

    @OneToMany(mappedBy = "game", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<>();

    @ManyToMany(mappedBy = "games")
    private List<Wishlist> wishlists = new ArrayList<>();
    
    public Game(Long id, String name, int year, String genre, double avg_note, String url_imagem, String short_desc, String long_desc) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.avg_note = avg_note;
        this.url_imagem = url_imagem;
        this.short_desc = short_desc;
        this.long_desc = long_desc;
    }

    public Game() {
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getYear() {
        return year;
    }
    public void setYear(int year) {
        this.year = year;
    }
    public String getGenre() {
        return genre;
    }
    public void setGenre(String genre) {
        this.genre = genre;
    }
    public double getAvg_note() {
        return avg_note;
    }
    public void setAvg_note(double avg_note) {
        this.avg_note = avg_note;
    }
    public String getUrl_imagem() {
        return url_imagem;
    }
    public void setUrl_imagem(String url_imagem) {
        this.url_imagem = url_imagem;
    }
    public String getShort_desc() {
        return short_desc;
    }
    public void setShort_desc(String short_desc) {
        this.short_desc = short_desc;
    }
    public String getLong_desc() {
        return long_desc;
    }
    public void setLong_desc(String long_desc) {
        this.long_desc = long_desc;
    }
    public List<Review> getReviews() {
        return reviews;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Game other = (Game) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

}
