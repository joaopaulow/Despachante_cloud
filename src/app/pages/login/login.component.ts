import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { catchError, debounceTime, map, Observable, of } from 'rxjs';
import { LoadingComponent } from "../../utils/loading.component";

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, LoadingComponent]

})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  loadingMessage = "";

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]], // Adicionando Validators.email
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.isLoading = true; 
      this.loadingMessage = 'Entrando...';

      this.http.post<any>('http://localhost:5000/api/auth/login', this.loginForm.value)
          .subscribe({
              next: (response) => {
                  localStorage.setItem('token', response.token);
                  this.router.navigate(['/dashboard']);
              },
              error: () => {
                  alert('Login falhou! Verifique suas credenciais.');
                  this.isLoading = false; // Oculta o modal de loading ao falhar
              },
              complete: () => {
                  this.isLoading = false; // Garante que o loading seja ocultado ao finalizar
              }
          });
  }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
