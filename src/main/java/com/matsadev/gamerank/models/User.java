package com.matsadev.gamerank.models;

import java.io.Serializable;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.matsadev.gamerank.models.dtos.UserDto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {
    public static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    
    @JsonIgnore
    @OneToMany(mappedBy = "user") //Um usuário pode ter várias reviews
    private Set<Review> review;
    

    //UserDto to User conversion
    public User(UserDto dto) {
        this.username = dto.username();
        this.password = dto.password();
    }

}
