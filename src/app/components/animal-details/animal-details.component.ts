import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/common/animal';
import { AnimalItem } from 'src/app/common/animal-item';
import { AnimalService } from 'src/app/services/animal.service';
import { CareCartService } from 'src/app/services/care-cart.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  animal: Animal = new Animal();

  constructor(private animalService: AnimalService, 
    private route: ActivatedRoute, 
    private careCartService: CareCartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleAnimalDetails();
    })
  }

  handleAnimalDetails() {
    const theAnimalId: number = +this.route.snapshot.paramMap.get('id')!;

    this.animalService.getAnimal(theAnimalId).subscribe(
      data => {
        this.animal = data;
      }
    )
  }

  addToCareCart(animal: Animal) {
    console.log(`Adding to care cart: ${animal.name}, ${animal.description}`);

    const animalItem: AnimalItem = new AnimalItem(animal);

    this.careCartService.addToCart(animalItem);
  }

}
