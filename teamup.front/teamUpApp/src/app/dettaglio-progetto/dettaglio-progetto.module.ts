import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioProgettoPageRoutingModule } from './dettaglio-progetto-routing.module';

import { DettaglioProgettoPage } from './dettaglio-progetto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioProgettoPageRoutingModule
  ],
  declarations: [DettaglioProgettoPage]
})
export class DettaglioProgettoPageModule {}
