import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FarmerDashboardComponent } from './components/farmer-dashboard/farmer-dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatusIndicatorComponent } from './components/status-indicator/status-indicator.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'farmer-dashboard', component: FarmerDashboardComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'status-indicator', component: StatusIndicatorComponent },
  { path: '**', redirectTo: '' } // Redirect any other path to home
];
