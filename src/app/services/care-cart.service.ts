import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AnimalItem } from '../common/animal-item';

@Injectable({
  providedIn: 'root'
})
export class CareCartService {

  animalItems: AnimalItem[] = [];

  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theAnimalItem: AnimalItem) {

    this.animalItems.push(theAnimalItem);

    this.computeCartTotals();
  }

  computeCartTotals() {

    let totalQuantityValue: number = 0;
    this.animalItems.forEach(() => totalQuantityValue++);

    // publish the new values ... all subscribers will receive the new data
    this.totalQuantity.next(totalQuantityValue);

    // log cart data just for debugging purposes
    this.logCartData(totalQuantityValue);
  }

  logCartData(totalQuantityValue: number) {

    console.log('Contents of the care cart');

    console.log(`totalQuantity: ${totalQuantityValue}`);
    console.log('----');
  }
}
