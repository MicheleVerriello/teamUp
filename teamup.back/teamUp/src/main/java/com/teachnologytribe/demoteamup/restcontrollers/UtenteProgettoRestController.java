package com.teachnologytribe.demoteamup.restcontrollers;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.teachnologytribe.demoteamup.classi.UtenteProgetto;
import com.teachnologytribe.demoteamup.repositories.interfaces.IUtenteProgettoRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UtenteProgettoRestController {
	
	@Autowired
	IUtenteProgettoRepository utenteProgettoRepository;

	@Transactional
	@GetMapping("/utente/progetto/{idUtente}")
	public List<UtenteProgetto> getUtenteProgettoByIdUtente(@PathVariable("idUtente") Long fkIdUtente) {
		
		return utenteProgettoRepository.findByFkIdUtente(fkIdUtente);
	}
	
	@Transactional
	@GetMapping("/utente/progetto/{idProgetto}")
	public List<UtenteProgetto> getUtenteProgettoByIdProgetto(@PathVariable("idProgetto") Long fkIdProgetto) {
		
		return utenteProgettoRepository.findByFkIdUtente(fkIdProgetto);
	}
	
	@Transactional
	@GetMapping("/utente/progetto/{idProgetto}/{idUtente}")
	public UtenteProgetto getUtenteProgettoByIdProgettoIdUtente(@PathVariable("idProgetto") Long fkIdProgetto, @PathVariable("idUtente") Long fkIdUtente) {
		
		return utenteProgettoRepository.findByFkIdUtenteFkIdProgetto(fkIdUtente, fkIdProgetto);
	}
	
	@Transactional
	@PostMapping("/utente/progetto")
	public void creaUtenteProgetto(@RequestBody UtenteProgetto utenteProgetto) {
		
		utenteProgettoRepository.save(utenteProgetto);
	}
}
