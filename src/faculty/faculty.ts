import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  imports: [CommonModule],
  templateUrl: './faculty.html',
  styleUrl: './faculty.css'
})
export class Faculty implements OnInit{
  teamMembers = [
    {
      name: 'Mr. Arun Yadav',
      designation: 'Principal',
      image: '/Images/arr.jpg'
    },
    {
      name: 'Mr. Pawan',
      designation: 'Voice Princepal',
      image: '/Images/pawan.jpg'
    },
    {
      name: 'Mr. Arun Yadav',
      designation: 'Principal',
      image: '/Images/arr.jpg'
    },
    {
      name: 'Mr. Akhilesh',
      designation: 'Physics HOD',
      image: '/Images/akhilesh.jpg'
    },
    {
      name: 'Mr. Pawan',
      designation: 'Voice Princepal',
      image: '/Images/pawan.jpg'
    },
    {
      name: 'Mr. Akhilesh',
      designation: 'Physics HOD',
      image: '/Images/akhilesh.jpg'
    }
  ];

  startIndex = 0;
  visibleMembers: { name: string; designation: string; image: string; }[] = [];

  ngOnInit() {
    this.updateVisibleMembers();
  }

  updateVisibleMembers() {
    this.visibleMembers = this.teamMembers.slice(this.startIndex, this.startIndex + 3);
  }

  slideRight() {
    if (this.startIndex + 3 < this.teamMembers.length) {
      this.startIndex++;
      this.updateVisibleMembers();
    }
    console.log("ksaksjkajk");
  }

  slideLeft() {
    if (this.startIndex > 0) {
      this.startIndex--;
      this.updateVisibleMembers();
    }
  }

}
