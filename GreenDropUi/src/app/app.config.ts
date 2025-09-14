import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

// Make sure you are importing your routes file
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // This line activates the router with your defined routes
    provideRouter(routes),
    // Provide HttpClient for making HTTP requests
    provideHttpClient()
  ]
};