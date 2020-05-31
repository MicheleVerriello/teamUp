package com.teachnologytribe.demoteamup.repositories.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teachnologytribe.demoteamup.classi.Utente;

@Repository //Sottocategoria di @Component che indica che si tratta di una repository
public interface IUtenteRepository extends JpaRepository<Utente, Long> {

}
