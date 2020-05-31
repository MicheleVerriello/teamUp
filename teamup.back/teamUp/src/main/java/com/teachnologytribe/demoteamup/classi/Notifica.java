package com.teachnologytribe.demoteamup.classi;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Notifica {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String descrizione;
	private Long fkIdUtente;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDescrizione() {
		return descrizione;
	}
	public void setDescrizioneNotifica(String descrizione) {
		this.descrizione = descrizione;
	}
	public Long getFkIdUtente() {
		return fkIdUtente;
	}
	public void setFkIdUtente(Long fkIdUtente) {
		this.fkIdUtente = fkIdUtente;
	}
	
}