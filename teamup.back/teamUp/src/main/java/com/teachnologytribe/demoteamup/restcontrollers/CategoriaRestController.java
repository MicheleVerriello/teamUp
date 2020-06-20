package com.teachnologytribe.demoteamup.restcontrollers;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teachnologytribe.demoteamup.classi.Categoria;
import com.teachnologytribe.demoteamup.repositories.interfaces.ICategoriaRepository;

@RestController
@CrossOrigin(origins = "http://localhost:8100")
@RequestMapping("/categoria")
public class CategoriaRestController {
	
	@Autowired
	ICategoriaRepository categoriaRepository;
	
	@Transactional
	@GetMapping("/categorie")
	public List<Categoria> getCategorie() {
		return categoriaRepository.findAll();
	}
}
