import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgriculteurListComponent } from './components/agriculteur-list/agriculteur-list.component';
import { AgriculteurFormComponent } from './components/agriculteur-form/agriculteur-form.component';
import { ChampListComponent } from './components/champ-list/champ-list.component';
import { ChampFormComponent } from './components/champ-form/champ-form.component';
import { ChampDetailsComponent } from './components/champ-details/champ-details.component';
import { CultureListComponent } from './components/culture-list/culture-list.component';
import { CultureFormComponent } from './components/culture-form/culture-form.component';
import { SeanceIrrigationListComponent } from './components/seance-irrigation-list/seance-irrigation-list.component';
import { SeanceIrrigationFormComponent } from './components/seance-irrigation-form/seance-irrigation-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'agriculteurs', component: AgriculteurListComponent, canActivate: [AuthGuard] },
  { path: 'agriculteurs/new', component: AgriculteurFormComponent, canActivate: [AuthGuard] },
  { path: 'agriculteurs/:id/edit', component: AgriculteurFormComponent, canActivate: [AuthGuard] },
  { path: 'champs', component: ChampListComponent, canActivate: [AuthGuard] },
  { path: 'champs/new', component: ChampFormComponent, canActivate: [AuthGuard] },
  { path: 'champs/:id', component: ChampDetailsComponent, canActivate: [AuthGuard] },
  { path: 'champs/:id/edit', component: ChampFormComponent, canActivate: [AuthGuard] },
  { path: 'cultures', component: CultureListComponent, canActivate: [AuthGuard] },
  { path: 'cultures/new', component: CultureFormComponent, canActivate: [AuthGuard] },
  { path: 'cultures/:id/edit', component: CultureFormComponent, canActivate: [AuthGuard] },
  { path: 'seance-irrigations', component: SeanceIrrigationListComponent, canActivate: [AuthGuard] },
  { path: 'seance-irrigations/new', component: SeanceIrrigationFormComponent, canActivate: [AuthGuard] },
  { path: 'seance-irrigations/:id/edit', component: SeanceIrrigationFormComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];
