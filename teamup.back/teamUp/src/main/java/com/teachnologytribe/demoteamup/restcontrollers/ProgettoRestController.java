package com.teachnologytribe.demoteamup.restcontrollers;

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
import com.teachnologytribe.demoteamup.classi.UtenteProgetto;
import com.teachnologytribe.demoteamup.classi.richieste.NuovoProgetto;
import com.teachnologytribe.demoteamup.repositories.interfaces.IProgettoRepository;
import com.teachnologytribe.demoteamup.repositories.interfaces.IUtenteProgettoRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/progetto")
public class ProgettoRestController {

	@Autowired
	IProgettoRepository progettoRepository;
	IUtenteProgettoRepository utenteProgettoRepository;
	
	@Transactional
	@PostMapping("/crea")
	public void creaProgetto(@RequestBody NuovoProgetto nuovoProgetto) {
		Progetto resProgetto = progettoRepository.save(nuovoProgetto.getProgetto());
		
		UtenteProgetto utenteProgetto = new UtenteProgetto();
		utenteProgetto.setFkIdProgetto(resProgetto.getId());
		utenteProgetto.setFkIdUtente(nuovoProgetto.getIdUtente());
		utenteProgetto.setTipoUtente(0); //0 = leader
		
		utenteProgettoRepository.save(utenteProgetto);
	}
	
	@Transactional
	@PostMapping("/modifica")
	public void modificaProgetto(@RequestBody Progetto progetto) {
		progettoRepository.save(progetto);
	}
	
	@Transactional
	@GetMapping("get/{id}")
	public Progetto getProgettoById(@PathVariable("id") Long id) {
		return progettoRepository.getOne(id);
	}
	
	@Transactional
	@PostMapping("/partecipa")
	public void partecipaProgetto(@RequestBody UtenteProgetto utenteProgetto) {
		utenteProgettoRepository.save(utenteProgetto);
	}
	
	@Transactional
	@DeleteMapping("/elimina/{id}")
	public void eliminaProgetto(@PathVariable("id") Long id) {
		progettoRepository.deleteById(id);
	}
	
	@Transactional
	@DeleteMapping("/abbandona")
	public void abbandonaProgetto(@RequestBody UtenteProgetto utenteProgetto) {
		utenteProgettoRepository.deleteById(utenteProgettoRepository.findByFkIdUtenteFkIdProgetto(utenteProgetto.getFkIdUtente(), utenteProgetto.getFkIdProgetto()).getId());
	}
}
