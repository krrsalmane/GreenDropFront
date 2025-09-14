import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crops',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './crops.component.html',
  styleUrl: './crops.component.css'
})
export class CropsComponent {

}