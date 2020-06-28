package com.teachnologytribe.demoteamup.repositories.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.teachnologytribe.demoteamup.classi.Utente;

@Repository //Sottocategoria di @Component che indica che si tratta di una repository
public interface IUtenteRepository extends JpaRepository<Utente, Long> {
	
	List<Utente> findByEmail(String email);
	
	List<Utente> findByUsername(String username);
	
	Utente findByEmailIgnoreCaseAndPasswordIgnoreCase(String email, String password);
	
	List<Utente> findUtenteByNomeLikeOrCognomeLikeOrUsernameLikeOrEmailLike(String nome, String cognome, String username, String email);
	
	@Query("select u from Utente u where u.nome like %:nome% or u.cognome like %:cognome% or u.username like %:username% or u.email like %:email%")
	List<Utente> findByLikeNomeOrCognomeOrUsernameOrEmail(@Param("nome")String nome, @Param("cognome")String cognome, @Param("username")String username, @Param("email")String email);
}
