import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/common/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list-table.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals: Animal[] = [];

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.listAnimals();
  }

  listAnimals() {
    this.animalService.getAnimalList().subscribe(
      data => {
        this.animals = data;
      }
    )
  }

}
