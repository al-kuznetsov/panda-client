import { Component, OnInit } from '@angular/core';
import { AnimalItem } from 'src/app/common/animal-item';

@Component({
  selector: 'app-animal-criteria-report',
  templateUrl: './animal-criteria-report.component.html',
  styleUrls: ['./animal-criteria-report.component.css']
})
export class AnimalCriteriaReportComponent implements OnInit {

  animalItems: AnimalItem[] = [];
  totalQuantity: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
