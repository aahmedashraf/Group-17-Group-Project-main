package com.example.Group17.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Group17.model.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long>{

}