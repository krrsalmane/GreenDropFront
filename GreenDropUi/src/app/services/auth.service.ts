import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // The base URL of your Spring Boot backend (running on port 8182)
  private apiUrl = 'http://localhost:8183/api/auth';

  constructor(private http: HttpClient) { }

  /**
   * Sends a registration request to the backend.
   * @param userData The user's registration data.
   */
  register(userData: any): Observable<any> {
    console.log('AuthService: Sending registration data to backend:', userData);
    console.log('AuthService: Making POST request to:', `${this.apiUrl}/register`);
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  /**
   * Sends a login request to the backend.
   * @param credentials The user's email and password.
   */
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          this.saveToken(response.token);
        }
      })
    );
  }

  /**
   * Saves the JWT token to local storage.
   * @param token The JWT token.
   */
  saveToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  /**
   * Retrieves the JWT token from local storage.
   */
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  /**
   * Checks if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  /**
   * Logs the user out by removing the token.
   */
  logout(): void {
    localStorage.removeItem('auth_token');
  }
}
