package com.teachnologytribe.demoteamup.restcontrollers;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.teachnologytribe.demoteamup.classi.Progetto;
import com.teachnologytribe.demoteamup.repositories.interfaces.IProgettoRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProgettoRestController {

	@Autowired
	IProgettoRepository progettoRepository;
	
	@Transactional
	@PostMapping("/progetto")
	public void creaProgetto(@RequestBody Progetto progetto) {
		progettoRepository.save(progetto);
	}
	
	@Transactional
	@GetMapping("/progetto/{id}")
	public Progetto getProgettoById(@PathVariable("id") Long id) {
		
		return progettoRepository.getOne(id);
	}
}
