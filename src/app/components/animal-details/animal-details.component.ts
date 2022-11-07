import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/common/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  animal!: Animal;

  constructor(private animalService: AnimalService, private route: ActivatedRoute) { }

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

}
