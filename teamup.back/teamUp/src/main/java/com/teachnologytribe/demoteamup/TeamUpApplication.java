package com.teachnologytribe.demoteamup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories;

@EnableJdbcRepositories //Annotation utile per abilitare le operazioni crud tramite jdbc
@SpringBootApplication
public class TeamUpApplication {

	public static void main(String[] args) {
		SpringApplication.run(TeamUpApplication.class, args);
	}

}