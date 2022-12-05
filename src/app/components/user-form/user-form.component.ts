import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.userFormGroup = this.formBuilder.group({
      user: this.formBuilder.group({
        name: [''],
        email: [''],
        jobTitle: [''],
        phone: ['']
      })
    })
  }

  onSubmit() {
    console.log("Handling the submit button on user-form");
    console.log(this.userFormGroup.get("user")?.value);
  }

}
