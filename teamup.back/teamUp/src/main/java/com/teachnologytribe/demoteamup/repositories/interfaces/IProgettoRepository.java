package com.teachnologytribe.demoteamup.repositories.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.teachnologytribe.demoteamup.classi.Progetto;

@Repository //Sottocategoria di @Component che indica che si tratta di una repository
public interface IProgettoRepository extends JpaRepository<Progetto, Long> {

	List<Progetto> findByNomeProgetto(String nomeProgetto);
	
	@Query("select p from Progetto p where p.nomeProgetto like %:nomeProgetto%")
	List<Progetto> findProgettoByNomeProgetto(String nomeProgetto);
}
