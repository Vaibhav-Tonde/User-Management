package com.managementsystem.ManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.managementsystem.ManagementSystem.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	
}
