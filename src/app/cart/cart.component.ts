import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
array:Array<object>
quantity:number;

get selectedCardObject():Array<object> {
   return this.d.selectedCardsArray;
}
set selectedCardObject(value: Array<object>) {
   this.d.selectedCardsArray = value;
}

constructor(private d: DetailService) {
  this.array=[];
}
deleteProduct(){
const cardId:number = parseInt((event.target as HTMLInputElement).id);

    for(var i=0;i<this.d.selectedCardsArray.length;i++)
    {
          if (this.d.selectedCardsArray[i]["id"]==cardId)
          {
            this.d.selectedCardsArray.splice(i,1);
              break;
          }
        }
}
  ngOnInit() {
    this.array=this.d.selectedCardsArray;
  }

}
