import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  formGroup = "form-group"
  contactMethods = [
    { id: 1, name: "Email" },
    { id: 2, name: "Phone" }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  log(x, y) {
    console.log(x.__proto__);
    console.log(y);
  }
  submit(f) {
    console.log(f);
  }
}
