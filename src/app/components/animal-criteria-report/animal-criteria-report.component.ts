import { Component, OnInit } from '@angular/core';
import { AnimalCriteriaContainer } from 'src/app/common/animal-criteria-container';
import { AnimalItem } from 'src/app/common/animal-item';
import { AnimalService } from 'src/app/services/animal.service';
import { CareCartService } from 'src/app/services/care-cart.service';

@Component({
  selector: 'app-animal-criteria-report',
  templateUrl: './animal-criteria-report.component.html',
  styleUrls: ['./animal-criteria-report.component.css']
})
export class AnimalCriteriaReportComponent implements OnInit {

  animalItems: AnimalItem[] = [];
  animalCriteriaContainers: AnimalCriteriaContainer[] = [];
  totalQuantity: number = 0;

  constructor(private careCartService: CareCartService,
    private animalService: AnimalService) { }

  ngOnInit(): void {

    this.buildAnimalCriteriaReport();
  }

  buildAnimalCriteriaReport() {

    this.animalItems = this.careCartService.animalItems;
    const animalIds: number[] = [];

    this.animalItems.forEach(tempAnimalItem => animalIds.push(tempAnimalItem.id));

    // Получить расчеты глобальных критериев и наполнить отображение.
    this.listAnimalCriteriaContainers(animalIds);

    this.careCartService.totalQuantity.subscribe(
      totalQuantity => this.totalQuantity = totalQuantity)
  }

  listAnimalCriteriaContainers(animalIds: number[]) {
    this.animalService.getAnimalCriteriaContainers(animalIds).subscribe(
      data => this.animalCriteriaContainers = data
    )
  }

}
