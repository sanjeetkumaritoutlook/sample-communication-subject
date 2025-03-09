import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-opportunity-header',
  template: `<form (ngSubmit)="submitForm()">
      <input [(ngModel)]="formData.name" name="first" placeholder="Enter Name" />
        <button type="submit">Submit</button>
      </form>`,
  styleUrls: ['./opportunity-header.component.css']
})
export class OpportunityHeaderComponent implements OnInit {
  @Input() formData: any = {};
  @Output() formSubmitted = new EventEmitter<any>();

  submitForm() {
    console.log('microui template form'+JSON.stringify(this.formData));
    this.formSubmitted.emit(this.formData);
  }
  constructor() { }

  ngOnInit() {
  }

}
