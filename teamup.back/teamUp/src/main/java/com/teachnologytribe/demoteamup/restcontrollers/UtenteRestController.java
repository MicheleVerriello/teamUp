package com.teachnologytribe.demoteamup.restcontrollers;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.teachnologytribe.demoteamup.classi.Utente;
import com.teachnologytribe.demoteamup.repositories.interfaces.IUtenteRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UtenteRestController {

	@Autowired
	IUtenteRepository utenteRepository;
	
	@Transactional
	@PostMapping("/registrazione")
	public Utente registrazione(@RequestBody Utente utente) {
		
		try {
			utenteRepository.save(utente);
		}
		catch (Exception e) {
			e.printStackTrace();
			utente.setId((long) 0); 
		}
		
		return utente;
	}
	
	
	@Transactional
	@GetMapping("/login")
	public Utente login(@RequestBody Utente utente) {
		
		Utente resUtente = new Utente();
		
		try {
			resUtente = utenteRepository.getUtenteByUsernameAndPassword(utente.getUsername(), utente.getPassword());
		}
		catch (Exception e) {
			e.printStackTrace();
			resUtente.setId((long) 0); 
		}
		
		return resUtente;
	}
}
