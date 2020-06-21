package com.teachnologytribe.demoteamup.repositories.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teachnologytribe.demoteamup.classi.Categoria;

public interface ICategoriaRepository extends JpaRepository<Categoria, Long> {

	List<Categoria> findByNomeCategoria(String nomeCategoria);
}
