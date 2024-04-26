import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private apiService: ApiService, private router: Router) {}

  register(body: any): Observable<any> {
    const endpoint = 'users/register'; // Endpoint específico para o cadastro
    return this.apiService.post(endpoint, body);
  }

    resendCode(body: any): Observable<any> {
    const endpoint = 'users/resend'; // Endpoint específico para reenviar o código
    return this.apiService.put(endpoint, body);
  }

    validateCode(body: any): Observable<any> {
    const endpoint = 'users/validate'; // Endpoint específico para reenviar o código
    return this.apiService.post(endpoint, body);
  }
}

