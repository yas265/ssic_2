import { Component } from '@angular/core';
import { RegistrationDialog } from './registration-dialog/registration-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  standalone : true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  affiliationNumber = '123456';
  schoolCode = 'SCH001';
  constructor(private dialog: MatDialog) {}
  register() {
    // Handle online registration logic
    //alert('Redirecting to Online Registration...');
    const dialogRef = this.dialog.open(RegistrationDialog, {
      data: {affiliationNumber: this.affiliationNumber, schoolCode: this.schoolCode},
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      // if (result !== undefined) {
      //   this.animal.set(result);
      // }
    });
  }
}
