import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  // Adicione isso
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './utils/loading.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, LoadingComponent], // 🚀 Certifique-se de incluir aqui
  providers: [],
  bootstrap: [],
})
export class AppModule { }
