import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverProgettoPageRoutingModule } from './popover-progetto-routing.module';

import { PopoverProgettoPage } from './popover-progetto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverProgettoPageRoutingModule
  ],
  declarations: [PopoverProgettoPage]
})
export class PopoverProgettoPageModule {}
