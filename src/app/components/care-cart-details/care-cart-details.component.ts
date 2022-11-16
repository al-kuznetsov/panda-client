import { Component, OnInit } from '@angular/core';
import { AnimalItem } from 'src/app/common/animal-item';
import { CareCartService } from 'src/app/services/care-cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-care-cart-details',
  templateUrl: './care-cart-details.component.html',
  styleUrls: ['./care-cart-details.component.css']
})
export class CareCartDetailsComponent implements OnInit {

  animalItems: AnimalItem[] = [];
  totalQuantity: number = 0;
  maxNumberOfAminals: number = environment.maxNumberOfAnimalItemsInCareCart;

  constructor(private careCartService: CareCartService) { }

  ngOnInit(): void {
    this.listCareCartDetails();
  }

  listCareCartDetails() {

    // get a handle to the cart items
    this.animalItems = this.careCartService.animalItems;

    // subscribe to the cart totalQuantity
    this.careCartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    // compute cart totals to receive updated info form Subjects
    this.careCartService.computeCareCartTotals();
  }

  remove(animalItem: AnimalItem) {
    
    this.careCartService.remove(animalItem);
  }

}
