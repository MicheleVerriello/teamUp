import { Component } from '@angular/core';
import { ProgettoServiceService } from 'src/app/services/progetto-service.service';
import { Progetto } from 'src/app/models/Progetto';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  progetti: Progetto[] = [];

  constructor(private progettoService: ProgettoServiceService) {
  }

  ionViewWillEnter() {
    this.getProgettiSponsorizzati();
  }

  getProgettiSponsorizzati() {

    this.progetti = [];

    this.progettoService.getAll().subscribe(res => {
      for(let progetto of res) {
        if(progetto.sponsorizzato === 1) {
          this.progetti.push(progetto);
        }
      }
    });
  }
}
