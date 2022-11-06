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

  constructor(private animalService: AnimalService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listAnimals();
    });
  }

  listAnimals() {

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
