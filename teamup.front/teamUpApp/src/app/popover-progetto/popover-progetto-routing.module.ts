import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverProgettoPage } from './popover-progetto.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverProgettoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverProgettoPageRoutingModule {}
