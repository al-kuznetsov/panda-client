import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  animalFormGroup!: FormGroup;

  // Inject the form builder here
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // Use the form builder to build the form
    this.animalFormGroup = this.formBuilder.group({
      animal: this.formBuilder.group({
        name: [''],
        birthDate: [''],
        description: [''],
        fullBio: ['']
      })
    })
  }

  // Define method called when submit button is clicked
  onSubmit() {
    console.log("Handling the submit button");
    console.log(this.animalFormGroup.get("animal")?.value);
  }

}
