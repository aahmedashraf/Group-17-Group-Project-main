package com.example.Group17;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import com.example.Group17.repository.*;

@SpringBootApplication
@EnableJpaAuditing

@EnableJpaRepositories(basePackageClasses = UsersRepository.class)

public class Group17Application {

    public static void main(String[] args) {
        SpringApplication.run(Group17Application.class, args);
    }

}
