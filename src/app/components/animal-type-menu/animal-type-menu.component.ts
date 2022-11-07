import { Component, OnInit } from '@angular/core';
import { AnimalType } from 'src/app/common/animal-type';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal-type-menu',
  templateUrl: './animal-type-menu.component.html',
  styleUrls: ['./animal-type-menu.component.css']
})
export class AnimalTypeMenuComponent implements OnInit {

  animalTypes: AnimalType[] = [];

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.listAnimalTypes();
  }

  listAnimalTypes() {
    this.animalService.getAnimalTypes().subscribe(
      data => {
        console.log("Animal Types: " + JSON.stringify(data));
        this.animalTypes = data;
      }
    )
  }

}
