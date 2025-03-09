import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-opportunity-header',
 templateUrl: './opportunity-header.component.html',
  styleUrls: ['./opportunity-header.component.css']
})
export class OpportunityHeaderComponent implements OnInit {
  @Input() formData: any = {};
  @Output() formSubmitted = new EventEmitter<any>();

  opportunityForm!: FormGroup;
  nationalities: string[] = ['Indian', 'American', 'Canadian', 'British', 'Australian'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.opportunityForm = this.fb.group({
      firstName: [(this.formData && this.formData.firstName) ? this.formData.firstName : '', Validators.required],
      lastName: [(this.formData && this.formData.lastName) ? this.formData.lastName : '', Validators.required],
      dob: [(this.formData && this.formData.dob) ? this.formData.dob : '', Validators.required],
      city: [(this.formData && this.formData.city) ? this.formData.city : '', Validators.required],
      country: [(this.formData && this.formData.country) ? this.formData.country : '', Validators.required],
      nationality: [(this.formData && this.formData.nationality) ? this.formData.nationality : '', Validators.required]
    });
  }

  submitForm() {
    if (this.opportunityForm.valid) {
      console.log('Micro UI Form Data:', this.opportunityForm.value);
      this.formSubmitted.emit(this.opportunityForm.value);
    }
  }
}
