import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaProgettoPage } from './modifica-progetto.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaProgettoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaProgettoPageRoutingModule {}
