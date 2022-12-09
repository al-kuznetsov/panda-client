import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { animationFrameScheduler } from 'rxjs';
import { Animal } from 'src/app/common/animal';
import { AnimalIndicators } from 'src/app/common/animal-indicators';
import { AnimalType } from 'src/app/common/animal-type';
import { Sex } from 'src/app/common/sex';
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
  sexes: Sex[] = [];

  concsiousnessLevelEnum = ConcsiousnessLevel;
  bleedingLevelEnum = BleedingLevel;
  mobilityLevelEnum = MobilityLossLevel;
  appetiteLevelEnum = AppetiteLevel;
  aggressionLevelEnum = AggressionLevel;

  // Inject the form builder here
  constructor(private formBuilder: FormBuilder,
    private animalService: AnimalService,
    private commonFormService: CommonFormService,
    private router: Router) {
  }

  ngOnInit(): void {

    // Get data for drop-down lists
    this.listAnimalTypes();
    this.listSexes();

    // Use the form builder to build the form
    this.animalFormGroup = this.formBuilder.group({
      animal: this.formBuilder.group({
        name: [''],
        sex: [new Sex(999, "MALE", "Самец")],
        birthDate: [Date.now()],
        description: [''],
        fullBio: [''],
        active: { value: true, disabled: true },
        animalType: [{} as AnimalType],
        age: [0],
        isInfant: [false],
        consciousnessLevel: [this.concsiousnessLevelEnum[this.concsiousnessLevelEnum.CONSCIOUS]],
        height: [0.00],
        breathingRate: [0],
        heartRate: [0],
        bleedingLevel: [this.bleedingLevelEnum[this.bleedingLevelEnum.NO]],
        bodyTemperature: [0.00],
        severeDamageCount: [0],
        mildDamageCount: [0],
        mobilityLossLevel: [this.mobilityLevelEnum[this.mobilityLevelEnum.NO]],
        appetiteLevel: [this.appetiteLevelEnum[this.appetiteLevelEnum.GOOD]],
        hasSymptoms: [false],
        isPregnant: [false],
        aggressionLevel: [this.aggressionLevelEnum[this.aggressionLevelEnum.NO]]
      })
    })
  }

  ngAfterViewInit(): void {
    // TODO: fix getting default values for this form including animal type and sex
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

  listSexes() {
    this.animalService.getSexes().subscribe(
      data => {
        this.sexes = data;
      }
    )
  }

  // Define method called when submit button is clicked
  // It collects all data and calls REST API of the backend
  onSubmit() {
    console.log("Handling the submit button on animal-form");
    console.log(this.animalFormGroup.get("animal")?.value);
    console.log(`Aggression level read on form: ${this.animalFormGroup.get("animal")?.value.aggressionLevel}`)

    // populate object data
    let animal = new Animal();
    animal.name = this.animalFormGroup.controls['animal'].value.name;
    console.log(`Created Animal object name ${animal.name}`);
    animal.birthDate = this.animalFormGroup.controls['animal'].value.birthDate;
    console.log(`Created Animal object birthDate ${animal.birthDate}`);
    animal.description = this.animalFormGroup.controls['animal'].value.description;
    console.log(`Created Animal object description ${animal.description}`);
    animal.fullBio = this.animalFormGroup.controls['animal'].value.fullBio;
    // TODO add image upload feature
    animal.imageUrl = "assets/images/animals/animal-placeholder.webp";
    animal.active = this.animalFormGroup.controls['animal'].value.active;
    animal.active = this.animalFormGroup.controls['animal'].value.active;
    let animalType: AnimalType = new AnimalType();
    animalType.id = this.animalFormGroup.controls['animal'].value.animalType.id;
    animal.type = animalType;
    let sex: Sex = new Sex();
    sex.id = this.animalFormGroup.controls['animal'].value.sex.id;
    animal.sex = sex;
    let animalIndicators = new AnimalIndicators();
    animalIndicators.age = this.animalFormGroup.controls['animal'].value.age;
    animalIndicators.isInfant = this.animalFormGroup.controls['animal'].value.isInfant;
    animalIndicators.consciousnessLevel = this.animalFormGroup.controls['animal'].value.consciousnessLevel;
    animalIndicators.height = this.animalFormGroup.controls['animal'].value.height;
    animalIndicators.breathingRate = this.animalFormGroup.controls['animal'].value.breathingRate;
    animalIndicators.heartRate = this.animalFormGroup.controls['animal'].value.heartRate;
    animalIndicators.bleedingLevel = this.animalFormGroup.controls['animal'].value.bleedingLevel;
    animalIndicators.bodyTemperature = this.animalFormGroup.controls['animal'].value.bodyTemperature;
    animalIndicators.severeDamageCount = this.animalFormGroup.controls['animal'].value.severeDamageCount;
    animalIndicators.mildDamageCount = this.animalFormGroup.controls['animal'].value.mildDamageCount;
    animalIndicators.mobilityLossLevel = this.animalFormGroup.controls['animal'].value.mobilityLossLevel;
    animalIndicators.appetiteLevel = this.animalFormGroup.controls['animal'].value.appetiteLevel;
    animalIndicators.hasSymptoms = this.animalFormGroup.controls['animal'].value.hasSymptoms;
    animalIndicators.isPregnant = this.animalFormGroup.controls['animal'].value.isPregnant;
    animalIndicators.aggressionLevel = this.animalFormGroup.controls['animal'].value.aggressionLevel;
    const animalIndicatorsString = JSON.stringify(animalIndicators);
    console.log(`Created AnimalIndicators object: ${animalIndicatorsString}`);
    animal.indicators = animalIndicators;

    // call REST API via the AnimalService
    this.animalService.createAnimal(animal).subscribe({
        next: response => {
          alert(`Животное было добавлено с id: ${response.id}`);
          // reset the form
          this.resetForm();
        },
        error: error => {
          alert(`Произошла ошибка: ${error.message}`);
        }
      }
    );
  }

  resetForm() {
    // reset form data
    this.animalFormGroup.reset();

    // navigate back to the main page
    this.router.navigateByUrl("/animals");
  }

  getTodayString(): string {
    return this.commonFormService.getTodayString();
  }

}
