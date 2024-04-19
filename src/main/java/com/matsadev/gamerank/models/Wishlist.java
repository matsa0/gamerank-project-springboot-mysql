package com.matsadev.gamerank.models;

import java.io.Serializable;

import com.matsadev.gamerank.models.pk.WishlistPk;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "wishlist")
@NoArgsConstructor
@EqualsAndHashCode
@Getter
@Setter
public class Wishlist implements Serializable {
    public static final long serialVersionUID = 1L;

    @EmbeddedId
    private WishlistPk id = new WishlistPk();
}
