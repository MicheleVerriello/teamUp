package com.teachnologytribe.demoteamup.restcontrollers;

import java.util.ArrayList;
import java.util.List;

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

import com.teachnologytribe.demoteamup.classi.UtenteProgetto;
import com.teachnologytribe.demoteamup.repositories.interfaces.IUtenteProgettoRepository;

@RestController
@CrossOrigin(origins = "http://localhost:8100")
@RequestMapping("/utente/progetto")
public class UtenteProgettoRestController {
	
	@Autowired
	IUtenteProgettoRepository utenteProgettoRepository;
	
	
	@PostMapping("/partecipa")
	public Long partecipaProgetto(@RequestBody UtenteProgetto utenteProgetto) {
		
		Long idUtenteProgetto = (long) 0;
		
		try {
			UtenteProgetto resUtenteProgetto = utenteProgettoRepository.save(utenteProgetto);
			idUtenteProgetto = resUtenteProgetto.getId();
		}
		catch(Exception e) {
			idUtenteProgetto = (long) 0;
		}
		
		return idUtenteProgetto;
	}
	
	@Transactional
	@DeleteMapping("/abbandona/{idUtente}/{idProgetto}")
	public void abbandonaProgetto(@PathVariable("idUtente") Long idUtente, @PathVariable("idProgetto") Long idProgetto) {
		
		System.out.println("res = " + utenteProgettoRepository.findByFkIdUtenteFkIdProgetto(idUtente, idProgetto).getId());
		
		utenteProgettoRepository.deleteById(utenteProgettoRepository.findByFkIdUtenteFkIdProgetto(idUtente, idProgetto).getId());
	}
	
	@Transactional
	@DeleteMapping("/elimina/{idProgetto}")
	public int eliminaProgetto(@PathVariable("idProgetto") Long idProgetto) {

		int resEliminazione;
		List<UtenteProgetto> utentiProgetto = new ArrayList<UtenteProgetto>();
		
		try {
			utentiProgetto = utenteProgettoRepository.findByFkIdProgetto(idProgetto);
			
			for (UtenteProgetto utenteProgetto : utentiProgetto) {
				utenteProgettoRepository.deleteById(utenteProgetto.getId());
			}
			
			resEliminazione = 1;
		}
		catch (Exception e) {
			resEliminazione = 0;
		}
		
		return resEliminazione;
	}
	
	@GetMapping("/progetti/{id}")
	public List<UtenteProgetto> getIdProgettiByIdUtente(@PathVariable("id") Long id) {
		
		List<UtenteProgetto> resUtenteProgetto = new ArrayList<UtenteProgetto>();
		
		try {
			resUtenteProgetto = utenteProgettoRepository.findByFkIdUtente(id);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		return resUtenteProgetto;
	}
	
	@GetMapping("/utenti/{id}")
	public List<UtenteProgetto> getIdUtentiByIdProgetto(@PathVariable("id") Long id) {
		
		List<UtenteProgetto> resUtenteProgetto = new ArrayList<UtenteProgetto>();
		
		try {
			resUtenteProgetto = utenteProgettoRepository.findByFkIdProgetto(id);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		return resUtenteProgetto;
	}
	
	@PostMapping("/progetto/accetta")
	public Long accettaPartecipante(UtenteProgetto utenteProgetto) {
		
		Long res = (long) 0;
		
		try {
			UtenteProgetto resUtenteProgetto = utenteProgettoRepository.findByFkIdUtenteFkIdProgetto(utenteProgetto.getFkIdUtente(), utenteProgetto.getFkIdProgetto());
			
			utenteProgetto.setId(resUtenteProgetto.getId());
			
			res = utenteProgettoRepository.saveAndFlush(utenteProgetto).getId();
		}
		catch(Exception e) {
			res = (long) 0;
		}
		
		return res;
	}
}
