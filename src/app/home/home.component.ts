import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  form: FormGroup;
  dateOptions: Date[]; // Array to hold date options
 
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedDate: [null, Validators.required] // Initialize form control for selected date
    });
 
    // Populate dateOptions array with sample dates (you can fetch these from an API or any other source)
    this.dateOptions = [
      new Date(2024, 3, 10), // April 10, 2024
      new Date(2024, 3, 11), // April 11, 2024
      // Add more dates if needed
    ];
  }
}
