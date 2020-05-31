package com.teachnologytribe.demoteamup.classi;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UtenteProgetto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private int tipoUtente;
	private Long fkIdUtente;
	private Long fkIdProgetto;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getTipoUtente() {
		return tipoUtente;
	}
	public void setTipoUtente(int tipoUtente) {
		this.tipoUtente = tipoUtente;
	}
	public Long getFkIdUtente() {
		return fkIdUtente;
	}
	public void setFkIdUtente(Long fkIdUtente) {
		this.fkIdUtente = fkIdUtente;
	}
	public Long getFkIdProgetto() {
		return fkIdProgetto;
	}
	public void setFkIdProgetto(Long fkIdProgetto) {
		this.fkIdProgetto = fkIdProgetto;
	}
}