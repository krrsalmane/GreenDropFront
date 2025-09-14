import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

// Required imports for standalone components using forms
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  // Make sure to import FormsModule and HttpClientModule
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // This object holds the data from the form fields
  loginData = {
    email: '',
    password: ''
  };

  // Simple variables to track the form state
  isLoading = false; // Shows loading spinner when submitting
  errorMessage = ''; // Shows error message

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // Component initialized
  }

  /**
   * This method is called when the user clicks the "Sign In" button.
   */
  onSubmit(): void {
    // Clear any previous error messages
    this.errorMessage = '';
    
    // Show loading spinner
    this.isLoading = true;
    
    console.log('Attempting to log in with:', this.loginData);

    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Login successful!', response);
        this.isLoading = false;
        
        // IMPORTANT: Store the JWT token in the browser's localStorage
        if (response.token) {
          localStorage.setItem('jwt_token', response.token);
        }
        
        // Redirect to the main dashboard
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.isLoading = false;
        
        // Show user-friendly error message
        if (err.status === 401) {
          this.errorMessage = 'Invalid email or password. Please try again.';
        } else {
          this.errorMessage = 'Login failed. Please try again later.';
        }
      }
    });
  }
}