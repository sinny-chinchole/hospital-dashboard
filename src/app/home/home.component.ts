import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  myForm: FormGroup;
  dateOptions: Date[]; // Array to hold date options
 
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstName: ['Sinny', Validators.required],
      lastName: ['Chinchole', Validators.required],
      email: ['sinny@gmail.com', [Validators.required, Validators.email]],
      phone: ['1234567890', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      selectedDate: [null, Validators.required] // Initialize form control for selected date
    });
 
    // Populate dateOptions array with sample dates (you can fetch these from an API or any other source)
    this.dateOptions = [
      new Date(2024, 3, 10), // April 10, 2024
      new Date(2024, 3, 11), // April 11, 2024
      // Add more dates if needed
    ];
  }
  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value); // Use form.value to access form data
      // Perform form submission logic here
    }
  }
}
