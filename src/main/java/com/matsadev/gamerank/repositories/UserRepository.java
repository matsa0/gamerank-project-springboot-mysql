package com.matsadev.gamerank.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.matsadev.gamerank.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
}
