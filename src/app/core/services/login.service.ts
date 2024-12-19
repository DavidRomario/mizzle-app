import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  login(body: any): Observable<any> {
    return this.apiService.post('login', body);
  }
}
