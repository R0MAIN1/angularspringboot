import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importation de FormsModule
import { CommonModule } from '@angular/common'; // Importation de CommonModule, si nécessaire

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {UserService} from "./services/user.service"; // Importation de UserComponent
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent // Déclaration des composants
  ],
  imports: [
    BrowserModule, // Importation de BrowserModule
    CommonModule,  // Importation de CommonModule, si nécessaire
    FormsModule,   // Importation de FormsModule
    HttpClientModule // Importation de HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent] // Déclaration du composant de démarrage
})
export class AppModule { }
