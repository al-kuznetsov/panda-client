import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/common/animal';
import { AnimalItem } from 'src/app/common/animal-item';
import { AnimalService } from 'src/app/services/animal.service';
import { CareCartService } from 'src/app/services/care-cart.service';
import { MapperService } from 'src/app/services/mapper.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  animalItem: AnimalItem = new AnimalItem(new Animal());

  constructor(private animalService: AnimalService,
    private route: ActivatedRoute,
    private careCartService: CareCartService,
    private mapperService: MapperService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleAnimalDetails();
    })
  }

  handleAnimalDetails() {
    const theAnimalId: number = +this.route.snapshot.paramMap.get('id')!;

    this.animalService.getAnimal(theAnimalId).subscribe(
      data => {
        this.animalItem = this.mapperService.mapAnimalItem(data);
      }
    )
  }

  addToCareCart(animalItem: AnimalItem) {
    console.log(`Adding to care cart: ${animalItem.name}, ${animalItem.description}`);

    this.animalItem.isAddToCartButtonDisabled = true;
    this.careCartService.addToCareCart(animalItem);
  }

  deleteAnimal(animalItem: AnimalItem) {

    const theId = animalItem.id;
    console.log(`Deleting Animal with id: ${theId}`);

    this.animalService.deleteAnimal(theId).subscribe({
        next: response => {
          console.log(`The animal with id ${theId} was deleted`);
          this.router.navigateByUrl("/animals");
        },
        error: error => {
          alert(`Произошла ошибка: ${error.message}`);
        }
      }
    )
  }

}
