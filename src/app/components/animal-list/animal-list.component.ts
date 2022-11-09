import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/common/animal';
import { AnimalItem } from 'src/app/common/animal-item';
import { AnimalType } from 'src/app/common/animal-type';
import { AnimalService } from 'src/app/services/animal.service';
import { CareCartService } from 'src/app/services/care-cart.service';
import { MapperService } from 'src/app/services/mapper.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list-grid.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals: Animal[] = [];
  currentAnimalTypeCode: string = '';
  previousAnimalTypeCode: string = '';
  searchMode: boolean = false;

  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  previousSearchKey: string = '';

  constructor(private animalService: AnimalService,
    private route: ActivatedRoute,
    private careCartService: CareCartService,
    private mapperService: MapperService) { }

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

    // if we have a different searchKey than previous, set thePageNumber to 1
    if (this.previousSearchKey != theSearchKey) {
      this.thePageNumber = 1;
    }

    this.previousSearchKey = theSearchKey;

    console.log(`theSearchKey=${theSearchKey}, thePageNumber=${this.thePageNumber}`);

    // page must be decremented because it is 0-based in Spring Boot
    this.animalService.searchAnimalsPaginate(
      this.thePageNumber - 1, this.thePageSize, theSearchKey)
      .subscribe(
        this.processResult()
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

    // Must check if we have a different animalType than previous
    // Note: Angular will reuse a component if it is currently being viewed
    // if we have a different type code than previous, set thePageNumber back to 1
    if (this.previousAnimalTypeCode != this.currentAnimalTypeCode) {
      this.thePageNumber = 1;
    }

    this.previousAnimalTypeCode = this.currentAnimalTypeCode;

    console.log(`currentAnimalTypeCode=${this.currentAnimalTypeCode}, thePageNumber=${this.thePageNumber}`);

    this.animalService.getAnimalListPaginate(
      this.thePageNumber - 1, this.thePageSize, this.currentAnimalTypeCode)
      .subscribe(
        this.processResult()
      )
  }

  updatePageSize(pageSize: string) {
    this.thePageSize = +pageSize;
    this.thePageNumber = 1;
    this.listAnimals();
  }

  addToCareCart(animal: Animal) {
    console.log(`Adding to care cart: ${animal.name}, ${animal.description}`);

    const animalItem: AnimalItem = new AnimalItem(animal);

    this.careCartService.addToCart(animalItem);
  }

  private processResult() {
    return (data: any) => {
      this.animals = data.content.map((a: any) => this.mapperService.mapAnimal(a));
      this.thePageNumber = data.number + 1;
      this.thePageSize = data.size;
      this.theTotalElements = data.totalElements;
    }
  }
}
