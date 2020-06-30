import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaProgettoPageRoutingModule } from './modifica-progetto-routing.module';

import { ModificaProgettoPage } from './modifica-progetto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaProgettoPageRoutingModule
  ],
  declarations: [ModificaProgettoPage]
})
export class ModificaProgettoPageModule {}
