import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tab-profile',
    loadChildren: () => import('./tab-profile/tab-profile.module').then( m => m.TabProfilePageModule)
  },
  {
    path: 'registrazione',
    loadChildren: () => import('./registrazione/registrazione.module').then( m => m.RegistrazionePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'nuovo-progetto',
    loadChildren: () => import('./nuovo-progetto/nuovo-progetto.module').then( m => m.NuovoProgettoPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dettaglio-progetto/:id',
    loadChildren: () => import('./dettaglio-progetto/dettaglio-progetto.module').then( m => m.DettaglioProgettoPageModule)
  },
  {
    path: 'richiest-partecipazione-progetto/:id',
    loadChildren: () => import('./richiest-partecipazione-progetto/richiest-partecipazione-progetto.module').then( m => m.RichiestPartecipazioneProgettoPageModule)
  },
  {
    path: 'popover-progetto/:id',
    loadChildren: () => import('./popover-progetto/popover-progetto.module').then( m => m.PopoverProgettoPageModule)
  },
  {
    path: 'modifica-progetto/:id',
    loadChildren: () => import('./modifica-progetto/modifica-progetto.module').then( m => m.ModificaProgettoPageModule)
  },  {
    path: 'paypal',
    loadChildren: () => import('./pages/paypal/paypal.module').then( m => m.PaypalPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
