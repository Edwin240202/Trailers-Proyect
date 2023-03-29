import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './datos/datos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewTrailerComponent } from './new-trailer/new-trailer.component';
import { UpdateTrailerComponent } from './update-trailer/update-trailer.component';

const routes: Routes = [
{
  path: 'home',
  component: HomeComponent,
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'datos',
  component: DatosComponent,
},
{
  path: 'new-trailer',
  component: NewTrailerComponent,
},
{
  path: 'update-trailer',
  component: UpdateTrailerComponent,
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
