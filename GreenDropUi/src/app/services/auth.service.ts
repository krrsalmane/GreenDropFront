import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // The base URL of your Spring Boot backend
  private apiUrl = 'http://localhost:8082/api/auth';

  constructor(private http: HttpClient) { }

  /**
   * Sends a registration request to the backend.
   * @param userData The user's registration data.
   */
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  /**
   * Sends a login request to the backend.
   * @param credentials The user's email and password.
   */
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}