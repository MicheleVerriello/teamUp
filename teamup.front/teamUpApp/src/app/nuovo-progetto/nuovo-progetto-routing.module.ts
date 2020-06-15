import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuovoProgettoPage } from './nuovo-progetto.page';

const routes: Routes = [
  {
    path: '',
    component: NuovoProgettoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuovoProgettoPageRoutingModule {}
