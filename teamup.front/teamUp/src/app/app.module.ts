import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtenteserviceService } from './servizi/utenteservice.service';
import { ProgettoserviceService } from './servizi/progettoservice.service';
import { HttpClientModule } from '@angular/common/http';
import { RegistazioneComponent } from './components/registazione/registazione.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistazioneComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UtenteserviceService,
    ProgettoserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
