import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnimalType } from 'src/app/common/animal-type';
import { AnimalService } from 'src/app/services/animal.service';
import { CommonFormService } from 'src/app/services/common-form.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  animalFormGroup!: FormGroup;
  animalTypes: AnimalType[] = [];

  // Inject the form builder here
  constructor(private formBuilder: FormBuilder,
    private animalService: AnimalService,
    private commonFormService: CommonFormService) { }

  ngOnInit(): void {
    // Get data for drop-down lists
    this.listAnimalTypes();

    // Use the form builder to build the form
    this.animalFormGroup = this.formBuilder.group({
      animal: this.formBuilder.group({
        name: [''],
        birthDate: [Date.now()],
        description: [''],
        fullBio: [''],
        active: { value: true, disabled: true },
        animalType: [{} as AnimalType]
      })
    })
  }

  listAnimalTypes() {
    this.animalService.getAnimalTypes().subscribe(
      data => {
        this.animalTypes = data;
      }
    )
  }

  // Define method called when submit button is clicked
  onSubmit() {
    console.log("Handling the submit button on animal-form");
    console.log(this.animalFormGroup.get("animal")?.value);
  }

  getTodayString(): string {
    return this.commonFormService.getTodayString();
  }

}
