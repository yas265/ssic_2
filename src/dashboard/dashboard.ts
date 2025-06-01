import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  affiliationNumber = '123456';
  schoolCode = 'SCH001';

  register() {
    // Handle online registration logic
    alert('Redirecting to Online Registration...');
  }
}
