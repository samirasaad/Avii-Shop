import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DetailService {
  //object to store selected product to be displayed in detail veiw
  selectedCardObject:object;
  //array have selected products to be added  to cart
  selectedCardsArray:Array<object>;
  constructor() {
    this.selectedCardObject={};
    this.selectedCardsArray=[];

   }

}
