import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnimalType } from 'src/app/common/animal-type';
import { AggressionLevel } from 'src/app/enums/aggression-level';
import { AppetiteLevel } from 'src/app/enums/appetite-level';
import { BleedingLevel } from 'src/app/enums/bleeding-level';
import { ConcsiousnessLevel } from 'src/app/enums/concsiousness-level';
import { MobilityLossLevel } from 'src/app/enums/mobility-loss-level';
import { AnimalService } from 'src/app/services/animal.service';
import { CommonFormService } from 'src/app/services/common-form.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit, AfterViewInit {

  animalFormGroup!: FormGroup;
  animalTypes: AnimalType[] = [];

  concsiousnessLevelEnum = ConcsiousnessLevel;
  bleedingLevelEnum = BleedingLevel;
  mobilityLevelEnum = MobilityLossLevel;
  appetiteLevelEnum = AppetiteLevel;
  aggressionLevelEnum = AggressionLevel;

  // Inject the form builder here
  constructor(private formBuilder: FormBuilder,
    private animalService: AnimalService,
    private commonFormService: CommonFormService) {
  }

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
        animalType: [{} as AnimalType],
        age: [0],
        isInfant: [false],
        consciousnessLevel: [this.concsiousnessLevelEnum.CONSCIOUS],
        height: [0.00],
        breathingRate: [0],
        heartRate: [0],
        bleedingLevel: [this.bleedingLevelEnum.NO],
        bodyTemperature: [0.00],
        severeDamageCount: [0],
        mildDamageCount: [0],
        mobilityLossLevel: [this.mobilityLevelEnum.NO],
        appetiteLevel: [this.appetiteLevelEnum.GOOD],
        hasSymptoms: [false],
        isPregnant: [false],
        aggressionLevel: [this.aggressionLevelEnum.NO]
      })
    })
  }

  ngAfterViewInit(): void {
    // TODO: fix it
    const defaultAnimalType: AnimalType = this.animalTypes[0];
    console.log(`defaultAnimalType in animal-form is: ${defaultAnimalType}`)
    this.animalFormGroup.get("animal")?.get("animalType")?.setValue(defaultAnimalType);
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
