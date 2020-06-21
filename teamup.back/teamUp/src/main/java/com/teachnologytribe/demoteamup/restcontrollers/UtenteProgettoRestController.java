package com.teachnologytribe.demoteamup.restcontrollers;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
	@DeleteMapping("/abbandona")
	public void abbandonaProgetto(@RequestBody UtenteProgetto utenteProgetto) {
		utenteProgettoRepository.deleteById(utenteProgettoRepository.findByFkIdUtenteFkIdProgetto(utenteProgetto.getFkIdUtente(), utenteProgetto.getFkIdProgetto()).getId());
	}
}
