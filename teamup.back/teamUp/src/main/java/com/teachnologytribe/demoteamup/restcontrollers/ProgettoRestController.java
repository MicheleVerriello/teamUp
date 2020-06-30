package com.teachnologytribe.demoteamup.restcontrollers;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teachnologytribe.demoteamup.classi.Progetto;
import com.teachnologytribe.demoteamup.repositories.interfaces.IProgettoRepository;

@RestController
@CrossOrigin(origins = "http://localhost:8100")
@RequestMapping("/progetto")
public class ProgettoRestController {

	@Autowired
	IProgettoRepository progettoRepository;
	
	@Transactional
	@PostMapping("/crea")
	public Long creaProgetto(@RequestBody Progetto progetto) {
		
		Long idProgetto = (long) 0;
		
		try {
			Progetto resProgetto = progettoRepository.save(progetto);
			idProgetto = resProgetto.getId();
		}catch(Exception e) {
			idProgetto = (long) 0;
		}
		
		return idProgetto;
	}
	
	@Transactional
	@PostMapping("/modifica")
	public Long modificaProgetto(@RequestBody Progetto progetto) {
		
		Long resId = (long) 0;
		
		try {
			resId = progettoRepository.save(progetto).getId();
		}
		catch (Exception e) {
			resId = (long) 0;
		}
		
		return resId;
	}
	
	@Transactional
	@GetMapping("/progetto/{id}")
	public Optional<Progetto> getProgettoById(@PathVariable("id") Long id) {
		return progettoRepository.findById(id);
	}
	
	@Transactional
	@GetMapping("/progetti")
	public List<Progetto> getProgetti() {
		return progettoRepository.findAll();
	}
	
	@Transactional
	@GetMapping("/ricerca/{valore}")
	public List<Progetto> ricercaProgetti(@PathVariable("valore") String valore) {
		return progettoRepository.findProgettoByNomeProgetto(valore);
	}
	
	
	@Transactional
	@DeleteMapping("/elimina/{id}")
	public int eliminaProgetto(@PathVariable("id") Long id) {
		
		int resEliminazione = 0;
		
		try{
			progettoRepository.deleteById(id);
			resEliminazione = 1;
		}
		catch (Exception e) {
			resEliminazione = 0;
		}
		
		return resEliminazione;
	}
}
