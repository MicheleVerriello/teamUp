package com.teachnologytribe.demoteamup.repositories.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.teachnologytribe.demoteamup.classi.Utente;

@Repository //Sottocategoria di @Component che indica che si tratta di una repository
public interface IUtenteRepository extends JpaRepository<Utente, Long> {

	
	@Query("select u.id from Utente u where u.username like %:username% and u.password like %:password%")
	Utente getUtenteByUsernameAndPassword(@Param("username")String username, @Param("password")String password);
	
	List<Utente> findByEmail(String email);
	
	List<Utente> findByUsername(String username);
}
