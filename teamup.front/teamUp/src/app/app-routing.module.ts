import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistazioneComponent } from './components/registazione/registazione.component';


const routes: Routes = [
  {path: '**', redirectTo: '/registrazione'},
  {path: 'registrazione', component: RegistazioneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
