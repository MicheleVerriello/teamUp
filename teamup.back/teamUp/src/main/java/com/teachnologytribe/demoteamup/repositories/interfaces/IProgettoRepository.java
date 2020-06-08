package com.teachnologytribe.demoteamup.repositories.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teachnologytribe.demoteamup.classi.Progetto;

@Repository //Sottocategoria di @Component che indica che si tratta di una repository
public interface IProgettoRepository extends JpaRepository<Progetto, Long> {

	//@Query("INSERT INTO Progetto VALUES (progetto.id, progetto.nomeProgetto, progetto.descrizione, progetto.fkidcategoria)")

}
