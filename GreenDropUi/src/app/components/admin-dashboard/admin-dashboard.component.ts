import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StatusIndicatorComponent } from '../status-indicator/status-indicator.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,StatusIndicatorComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
