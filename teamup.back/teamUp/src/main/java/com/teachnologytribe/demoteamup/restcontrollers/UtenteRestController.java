package com.teachnologytribe.demoteamup.restcontrollers;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	
	@Transactional
	@GetMapping("/lista/username")
	public List<String> getAllUsernames() {
		
		List<String> usernames = new ArrayList<String>();
		
		List<Utente> utenti = new ArrayList<Utente>();
		
		utenti = utenteRepository.findAll();
		
		for (Utente utente : utenti) {
			usernames.add(utente.getUsername());
		}
		
		return usernames;
	}
	
	
	@Transactional
	@GetMapping("/lista/email")
	public List<String> getAllEmails() {
		
		
		List<String> emails = new ArrayList<String>();
		
		List<Utente> utenti = new ArrayList<Utente>();
		
		utenti = utenteRepository.findAll();
		
		for (Utente utente : utenti) {
			emails.add(utente.getEmail());
		}
		
		return emails;
	}
	
	
	@Transactional
	@GetMapping("/utente/{id}")
	public Utente getUtenteById(@PathVariable("id") Long id) {
		
		return utenteRepository.getOne(id);
	}
}
