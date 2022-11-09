import { Component, OnInit } from '@angular/core';
import { CareCartService } from 'src/app/services/care-cart.service';

@Component({
  selector: 'app-care-cart',
  templateUrl: './care-cart.component.html',
  styleUrls: ['./care-cart.component.css']
})
export class CareCartComponent implements OnInit {

  totalQuantity: number = 0;

  constructor(private careCartService: CareCartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    // subscribe to the care cart service totalQuantity subject
    this.careCartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
  }

}
