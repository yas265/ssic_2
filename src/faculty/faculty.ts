import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty',
  imports: [CommonModule],
  templateUrl: './faculty.html',
  styleUrl: './faculty.css'
})
export class Faculty {
  teamMembers = [
    {
      name: 'Dr. Arun Yadav',
      designation: 'Principal',
      image: '/Images/arr.jpg'
    },
    {
      name: 'Mr. ABC',
      designation: 'Vice Principal',
      image: '/Images/arr.jpg'
    },
    {
      name: 'Ms. XYZ',
      designation: 'Mathematics HOD',
      image: '/Images/arr.jpg'
    }
  ];
}
