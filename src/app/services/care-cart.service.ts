import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnimalItem } from '../common/animal-item';
import { SimpleErrorModalComponent } from '../components/error/modals/simple-error-modal/simple-error-modal.component';
import { Messages } from '../constant/messages';

@Injectable({
  providedIn: 'root'
})
export class CareCartService {

  animalItems: AnimalItem[] = [];

  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);
  maxNumberOfAnimalItems: number = environment.maxNumberOfAnimalItemsInCareCart;

  constructor(private modalService: NgbModal) { }

  addToCareCart(theAnimalItem: AnimalItem) {

    if (this.animalItems.length === this.maxNumberOfAnimalItems) {
      const errorMessage = `Количество добавленных животных не может превышать ${this.maxNumberOfAnimalItems}`;
      this.showErrorModal(Messages.errorModalTitle, errorMessage);
    } else {
      this.animalItems.push(theAnimalItem);
    }

    this.computeCareCartTotals();
  }

  // Note: this method must be called to emit Subjects value change events
  computeCareCartTotals() {

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

  remove(animalItem: AnimalItem) {

    const index: number = this.animalItems.findIndex(
      tempAnimalItem => tempAnimalItem.id === animalItem.id
    );

    if (index > -1) {
      this.animalItems.splice(index, 1);

      animalItem.isAddToCartButtonDisabled = false;
      this.computeCareCartTotals();
    }
  }

  private showErrorModal(errorTitle: string, errorMessage: string) {
    // Количество добавленных животных не может превышать ${this.maxNumberOfAnimalItems}
    const modalRef = this.modalService.open(SimpleErrorModalComponent);
    // pass info to the modal
    modalRef.componentInstance.theModalTitle = errorTitle;
    modalRef.componentInstance.theErrorMessage = errorMessage;

    modalRef.result.then(
      result => console.log(result)
    ).catch(
      error => console.log(error)
    );
  }
}
