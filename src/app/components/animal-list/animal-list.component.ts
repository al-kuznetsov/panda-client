import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/common/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list-grid.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals: Animal[] = [];
  currentAnimalTypeCode: string = 'DOG';
  searchMode: boolean = false;

  constructor(private animalService: AnimalService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listAnimals();
    });
  }

  listAnimals() {

    this.searchMode = this.route.snapshot.paramMap.has('searchKey');

    if (this.searchMode) {
      this.handleSearchAnimals();
    } else {
      this.handleListAnimals();
    }
  }

  handleSearchAnimals() {
    const theSearchKey: string = this.route.snapshot.paramMap.get('searchKey')!;

    this.animalService.searchAnimals(theSearchKey).subscribe(
      data => {
        this.animals = data;
      }
    )
  }

  handleListAnimals() {

    // check if animal type "code" parameter is available
    const hasAnimalTypeCode: boolean = this.route.snapshot.paramMap.has('code');

    if (hasAnimalTypeCode) {
      this.currentAnimalTypeCode = this.route.snapshot.paramMap.get('code')!;
    } else {
      // no default animal type code (empty string)
      this.currentAnimalTypeCode = '';
    }

    this.animalService.getAnimalList(this.currentAnimalTypeCode).subscribe(
      data => {
        this.animals = data;
      }
    )
  }

}
