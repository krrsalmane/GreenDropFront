import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

// Required imports for standalone components using forms
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  // Make sure to import FormsModule and HttpClientModule
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // This object holds the data from the form fields
  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  /**
   * This method is called when the user clicks the "Sign In" button.
   */
  onSubmit(): void {
    console.log('Attempting to log in with:', this.loginData);

    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Login successful!', response);
        // IMPORTANT: Store the JWT token in the browser's localStorage
        localStorage.setItem('jwt_token', response.token);
        
        // Redirect to the main dashboard or another protected page
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        // You can add logic here to display an "Invalid credentials" error
      }
    });
  }
}