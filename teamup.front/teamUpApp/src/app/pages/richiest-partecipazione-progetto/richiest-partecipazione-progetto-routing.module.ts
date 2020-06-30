import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RichiestPartecipazioneProgettoPage } from './richiest-partecipazione-progetto.page';

const routes: Routes = [
  {
    path: '',
    component: RichiestPartecipazioneProgettoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RichiestPartecipazioneProgettoPageRoutingModule {}
