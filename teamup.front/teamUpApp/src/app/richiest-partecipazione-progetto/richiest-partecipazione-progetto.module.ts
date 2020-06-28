import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RichiestPartecipazioneProgettoPageRoutingModule } from './richiest-partecipazione-progetto-routing.module';

import { RichiestPartecipazioneProgettoPage } from './richiest-partecipazione-progetto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RichiestPartecipazioneProgettoPageRoutingModule
  ],
  declarations: [RichiestPartecipazioneProgettoPage]
})
export class RichiestPartecipazioneProgettoPageModule {}
