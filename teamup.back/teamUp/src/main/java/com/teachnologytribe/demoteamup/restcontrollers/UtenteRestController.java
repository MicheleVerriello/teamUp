package com.teachnologytribe.demoteamup.restcontrollers;

import java.util.ArrayList;
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

import com.teachnologytribe.demoteamup.classi.Utente;
import com.teachnologytribe.demoteamup.repositories.interfaces.IUtenteRepository;

@RestController
@CrossOrigin(origins = "http://localhost:8100")
@RequestMapping("/utente")
public class UtenteRestController {

	@Autowired
	IUtenteRepository utenteRepository;
	
	@Transactional
	@PostMapping("/registrazione")
	public Utente registrazione(@RequestBody Utente utente) {
		
		try {
			
			List<Utente> usernames = utenteRepository.findByUsername(utente.getUsername());
			List<Utente> emails = utenteRepository.findByEmail(utente.getEmail());
			
			if(usernames.size() > 0 && emails.size() > 0) {
				utente.setId((long) -1);
			}
			else if(usernames.size() > 0) {
				utente.setId((long) -2);
			}
			else if(emails.size() > 0) {
				utente.setId((long) -3);
			}
			else {
				utenteRepository.save(utente);
			}
		}
		catch (Exception e) {
			e.printStackTrace();
			utente.setId((long) 0); 
		}
		
		return utente;
	}
	
	
	@Transactional
	@GetMapping("/login/{email}/{password}")
	public Utente login(@PathVariable("email") String email, @PathVariable("password") String password) {
		
		Utente utente = new Utente();
		
		try {
			utente = utenteRepository.findByEmailIgnoreCaseAndPasswordIgnoreCase(email, password);
		}
		catch (Exception e) {
			e.printStackTrace();
			utente.setId((long) 0); 
		}
		
		return utente;
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
	public Optional<Utente> getUtenteById(@PathVariable("id") Long id) {
		
		return utenteRepository.findById(id);
	}
	
	@Transactional
	@GetMapping("/ricerca/{valore}")
	public List<Utente> ricercaUtente(@PathVariable("valore") String valore) {
		
		return utenteRepository.findByLikeNomeOrCognomeOrUsernameOrEmail(valore, valore, valore, valore);
	}
	
	
	@Transactional
	@PostMapping("/modifica")
	public Utente modificaUtente(@RequestBody Utente utente) {
		
		Utente resUtente = new Utente();
		
		try {
			List<Utente> usernames = utenteRepository.findByUsername(utente.getUsername());
			
			if(usernames.size() > 0) {
				resUtente.setId((long) -2);
			}
			else {
				resUtente = utenteRepository.save(utente);
			}
		}
		catch (Exception e) {
			e.printStackTrace();
			resUtente.setId((long) 0); 
		}
		
		return resUtente;
	}
	
	
	@Transactional
	@PostMapping("/modifica/password")
	public Utente modificaPassword(@RequestBody Utente utente) {
		
		Utente resUtente = new Utente();
		
		try {
			resUtente = utenteRepository.saveAndFlush(utente);
		}
		catch (Exception e) {
			e.printStackTrace();
			resUtente.setId((long) 0); 
		}
		
		return resUtente;
	}
	
	
	@Transactional
	@DeleteMapping("/elimina/{id}")
	public Long eliminaUtente(@PathVariable("id") Long id) {
		
		Long resId = (long) 0;
		
		try {
			utenteRepository.deleteById(id);
			resId = (long) 1;
		}
		catch (Exception e) {
			resId = (long) 0;
		}
		
		return resId;
	}
}
