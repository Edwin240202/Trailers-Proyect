import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DatosComponent } from './datos/datos.component';
import { NewTrailerComponent } from './new-trailer/new-trailer.component';
import { UpdateTrailerComponent } from './update-trailer/update-trailer.component';
import { AlertComponent } from './component/alert/alert.component';
import { ConfirmationService, MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DatosComponent,
    NewTrailerComponent,
    UpdateTrailerComponent,
    AlertComponent
  ],
  exports: [
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule

  ],
  providers: [
    ConfirmationService,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
