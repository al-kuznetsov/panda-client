import { Component, OnInit } from '@angular/core';
import { AnimalItem } from 'src/app/common/animal-item';
import { CareCartService } from 'src/app/services/care-cart.service';

@Component({
  selector: 'app-animal-criteria-report',
  templateUrl: './animal-criteria-report.component.html',
  styleUrls: ['./animal-criteria-report.component.css']
})
export class AnimalCriteriaReportComponent implements OnInit {

  animalItems: AnimalItem[] = [];
  totalQuantity: number = 0;

  constructor(private careCartService: CareCartService) { }

  ngOnInit(): void {

    this.buildAnimalCriteriaReport();
  }

  buildAnimalCriteriaReport() {

    this.animalItems = this.careCartService.animalItems;

    // TODO Retrieve a list of animal criteria container from backend
    // and use them to populate this component view

    this.careCartService.totalQuantity.subscribe(
      totalQuantity => this.totalQuantity = totalQuantity)
  }

}
