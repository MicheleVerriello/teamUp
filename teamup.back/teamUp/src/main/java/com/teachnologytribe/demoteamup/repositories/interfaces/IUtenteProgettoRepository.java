package com.teachnologytribe.demoteamup.repositories.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.teachnologytribe.demoteamup.classi.UtenteProgetto;

@Repository
public interface IUtenteProgettoRepository extends JpaRepository<UtenteProgetto, Long> {

	List<UtenteProgetto> findByFkIdUtente(Long fkIdUtente);
	
	List<UtenteProgetto> findByFkIdProgetto(Long fkIdProgetto);
	
	@Query("select u from UtenteProgetto u where u.fkIdUtente = :fkIdUtente and u.fkIdProgetto = :fkIdProgetto")
	UtenteProgetto findByFkIdUtenteFkIdProgetto(@Param("fkIdUtente") Long fkIdUtente, @Param("fkIdProgetto") Long fkIdProgetto);
}
