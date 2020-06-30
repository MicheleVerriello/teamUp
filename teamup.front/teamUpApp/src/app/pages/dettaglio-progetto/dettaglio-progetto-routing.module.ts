import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioProgettoPage } from './dettaglio-progetto.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioProgettoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettaglioProgettoPageRoutingModule {}
