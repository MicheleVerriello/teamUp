package com.teachnologytribe.demoteamup.repositories.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teachnologytribe.demoteamup.classi.Utente;

@Repository //Sottocategoria di @Component che indica che si tratta di una repository
public interface IUtenteRepository extends JpaRepository<Utente, Long> {
	
	List<Utente> findByEmail(String email);
	
	List<Utente> findByUsername(String username);
	
	Utente findByEmailIgnoreCaseAndPasswordIgnoreCase(String email, String password);
}
