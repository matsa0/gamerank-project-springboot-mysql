package com.matsadev.gamerank.models.dtos;

public record GameDto(
    String name,
    String release_year,
    String genre,
    String url_image,
    String description
) {   
}
