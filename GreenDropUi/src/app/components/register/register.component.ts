import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

// Required imports for standalone components using forms
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  // Make sure to import FormsModule and HttpClientModule
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // This object holds the data from the form fields
  registerData = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    telephone: '',
    role: 'AGRICULTEUR' // Default role for public registration
  };

  constructor(private authService: AuthService, private router: Router) { }

  /**
   * This method is called when the user clicks the "Create Account" button.
   */
  onSubmit(): void {
    console.log('Submitting registration data:', this.registerData);
    
    this.authService.register(this.registerData).subscribe({
      next: (response) => {
        console.log('Registration successful!', response);
        // Redirect to the login page after a successful registration
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration failed:', err);
        // You can add logic here to display an error message to the user
      }
    });
  }
}