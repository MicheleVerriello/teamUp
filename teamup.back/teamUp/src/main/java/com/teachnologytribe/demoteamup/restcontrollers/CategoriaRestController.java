package com.teachnologytribe.demoteamup.restcontrollers;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@Transactional
	@GetMapping("/categoria/{name}")
	public Long getIdCategoriaByName(@PathVariable("name") String nomeCategoria) {
		
		Long idCategoria = (long)0;
		
		List<Categoria> categorie = categoriaRepository.findByNomeCategoria(nomeCategoria);
		
		if(categorie.size() == 1) {
			idCategoria = categorie.get(0).getId();
		}
		
		return idCategoria;
	}
	
	@Transactional
	@GetMapping("/categoria/id/{id}")
	public Optional<Categoria> getCategoriaById(@PathVariable("id") Long id) {
		
		return categoriaRepository.findById(id);
	}
	
	@Transactional
	@PostMapping("/categoria")
	public Long nuovaCategoria(@RequestBody Categoria nuovaCategoria) {
		
		Long idCategoria;
		
		try {
			
			if(this.getIdCategoriaByName(nuovaCategoria.getNomeCategoria()) > 0) {
				idCategoria = (long) -1;
			}
			else {
				idCategoria = categoriaRepository.save(nuovaCategoria).getId();
			}
		}
		catch(Exception e) {
			idCategoria = (long) 0;
		}
		
		return idCategoria;
	}
}
