import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'fury-contact-details-form',
  templateUrl: './contact-details-form.component.html',
  styleUrls: ['./contact-details-form.component.scss']
})
export class ContactDetailsFormComponent implements OnInit {

  phoneForm: FormGroup;

  countries = [
    { name: 'South Africa', code: '27' },
    { name: 'United Arab Emirates', code: '971' },
    { name: 'United Kingdom', code: '44' },
    // Add more countries as needed
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.phoneForm = this.fb.group({
      cellCountryCode: ['', Validators.required],
      cellPhoneNumber: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      bizCountryCode: ['', Validators.required],
      bizPhoneNumber: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    });
  }

  // Add a method to handle form submission if needed
  onSubmit() {
    if (this.phoneForm.valid) {
      const formData = this.phoneForm.value;
      // Process the form data here
    }
  }

}
