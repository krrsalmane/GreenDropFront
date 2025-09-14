import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

// Required imports for standalone components using forms
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  // Make sure to import FormsModule and HttpClientModule
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // This object holds the data from the form fields
  registerData = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    telephone: '',
    role: '' // User must select a role
  };

  // Simple variables to track the form state
  isLoading = false; // Shows loading spinner when submitting
  successMessage = ''; // Shows success message
  errorMessage = ''; // Shows error message

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // Component initialized
  }

  onSubmit(): void {
    // Clear any previous messages
    this.successMessage = '';
    this.errorMessage = '';
    
    // Show loading spinner
    this.isLoading = true;
    
    console.log('Submitting registration data:', this.registerData);
    console.log('Data being sent to backend:', JSON.stringify(this.registerData, null, 2));
    
    // Send data to backend
    this.authService.register(this.registerData).subscribe({
      next: (response) => {
        // Registration was successful!
        console.log('Registration successful!', response);
        this.isLoading = false;
        this.successMessage = response.message || 'Account created successfully!';
        
        // Wait 2 seconds, then redirect to login page
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (err) => {
        // Registration failed
        console.error('Registration failed:', err);
        console.error('Error details:', JSON.stringify(err, null, 2));
        console.error('Error status:', err.status);
        console.error('Error message:', err.error);
        this.isLoading = false;
        
        // Show user-friendly error message
        if (err.error && err.error.error) {
          this.errorMessage = err.error.error; // Backend error message
        } else if (err.status === 400) {
          this.errorMessage = 'Invalid data format. Please check all fields.';
        } else if (err.status === 403) {
          this.errorMessage = 'Access forbidden. Please try again.';
        } else {
          this.errorMessage = 'Registration failed. Please try again.';
        }
      }
    });
  }
}