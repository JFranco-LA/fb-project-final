import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { LoginComponent } from './components/forms/login/login.component';
import { RecoverPassComponent } from './components/forms/recover-pass/recover-pass.component';
import { RegisterComponent } from './components/forms/register/register.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { WaveComponent } from './components/shared/wave/wave.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavigationComponent,
    LoginComponent,
    RecoverPassComponent,
    RegisterComponent,
    UsuariosComponent,
    ContactoComponent,
    WaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
