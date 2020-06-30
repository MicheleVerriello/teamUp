package com.teachnologytribe.demoteamup.classi;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Progetto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String nomeProgetto;
	private String descrizione;
	private Long fkIdCategoria;
	private Long sponsorizzato; //1 = sponsorizzato
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNomeProgetto() {
		return nomeProgetto;
	}
	public void setNomeProgetto(String nomeProgetto) {
		this.nomeProgetto = nomeProgetto;
	}
	public String getDescrizione() {
		return descrizione;
	}
	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
	public Long getFkIdCategoria() {
		return fkIdCategoria;
	}
	public void setFkIdCategoria(Long fkIdCategoria) {
		this.fkIdCategoria = fkIdCategoria;
	}	
	public Long getSponsorizzato() {
		return sponsorizzato;
	}
	public void setSponsorizzato(Long sponsorizzato) {
		this.sponsorizzato = sponsorizzato;
	}
}