import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FarmerDashboardComponent } from './components/farmer-dashboard/farmer-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FieldsComponent } from './components/fields/fields.component';
import { CropsComponent } from './components/crops/crops.component';
import { IrrigationComponent } from './components/irrigation/irrigation.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SettingsComponent } from './components/settings/settings.component';
import { WaterUsageComponent } from './components/water-usage/water-usage.component';

export const routes: Routes = [
  // Public routes that should NOT have the main layout (navbar, sidebar, footer)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Protected routes with layout
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', redirectTo: 'home', pathMatch: 'full' },
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      { path: 'farmer-dashboard', component: FarmerDashboardComponent },
      { path: 'fields', component: FieldsComponent },
      { path: 'crops', component: CropsComponent },
      { path: 'irrigation', component: IrrigationComponent },
      { path: 'weather', component: WeatherComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'water-usage', component: WaterUsageComponent }
    ]
  },

  // Catch-all route - MUST be last
  { path: '**', redirectTo: 'home' }
];