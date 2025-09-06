import { Component, Input } from '@angular/core'; // Added Input import
import { CommonModule } from '@angular/common'; // Added for ngClass

@Component({
  selector: 'app-status-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.css']
})
export class StatusIndicatorComponent {
  @Input() status: string = 'optimal'; // Fixed with Input import

  getLabel(): string {
    switch (this.status.toLowerCase()) {
      case 'optimal':
        return 'Optimal';
      case 'needs-attention':
        return 'Needs Attention';
      case 'scheduled':
        return 'Scheduled';
      default:
        return this.status;
    }
  }
}