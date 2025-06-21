import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import { CommonModule } from '@angular/common'; 
import { MAT_DATE_LOCALE } from '@angular/material/core';

providers: [
  { provide: MAT_DATE_LOCALE, useValue: 'en-GB' } // or 'en-US'
]


@Component({
  selector: 'app-registration-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
       MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './registration-dialog.html',
  styleUrl: './registration-dialog.css'
})
export class RegistrationDialog {
   registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RegistrationDialog>
  ) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
    //  dob: ['', Validators.required],
      gender: ['', Validators.required],
      class: ['', Validators.required],
      section: ['', Validators.required],
      guardianName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      address: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted:', this.registrationForm.value);
      this.dialogRef.close();
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }

}
