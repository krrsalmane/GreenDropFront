import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StatusIndicatorComponent } from '../status-indicator/status-indicator.component';

@Component({
  selector: 'app-farmer-dashboard',
  standalone: true,
  imports: [CommonModule,StatusIndicatorComponent],
  templateUrl: './farmer-dashboard.component.html',
  styleUrl: './farmer-dashboard.component.css'
})
export class FarmerDashboardComponent {

}
