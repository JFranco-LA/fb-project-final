import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './views/contacto/contacto.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
