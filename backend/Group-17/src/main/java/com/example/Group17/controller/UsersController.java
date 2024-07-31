package com.example.Group17.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Group17.model.Users;
import com.example.Group17.repository.UsersRepository;

@RestController
// @RequestMapping("/")

public class UsersController {
    @Autowired
	UsersRepository usersRepository;

	// Get All Users Records
	@GetMapping("/users")
	public List<Users> getUsers() {
		return usersRepository.findAll();
	}

	// Create a new client record
	@PostMapping("/users")
	public Users createUser(@Valid @RequestBody Users users) {
		return usersRepository.save(users);
	}
}
