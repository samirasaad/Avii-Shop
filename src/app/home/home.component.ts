import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//service
import { DetailService } from '../detail.service';
import { QueryService } from '../query.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    cardData:Array<object>;
    isGrid:boolean;

  // set and get for selectedCardObject
  get selectedCardObject():object {
     return this.d.selectedCardObject;
   }
 set selectedCardObject(value: object) {
     this.d.selectedCardObject = value;
   }

 // set and get for selectedCardsArray
 get selectedCardsArray():Array<object> {
      return this.d.selectedCardsArray;
  }
set selectedCardsArray(value: Array<object>) {
      this.d.selectedCardsArray = value;
  }

constructor(private q :QueryService , private d : DetailService , private router:Router) {
      this.cardData=[];
      this.getCardsData();
      this.isGrid=true;
}

getCardsData():void{
     let path:string="../assets/cardsData.JSON";
     this.q.getData(path).subscribe(
       res =>{
          this.cardData=res;
          //console.log(res);
       },
      err =>{
          console.log(err)},
     );
  }

getCardId($event): void {
        const cardId:number = parseInt((event.target as HTMLInputElement).id);
         this.d.selectedCardObject=this.cardData[cardId];
         console.log(this.d.selectedCardObject);
     }

     addToCart($event): void {
       //AddTOCartBtn of type number because it`s the id of the cart clicked
          const AddTOCartBtn:number = parseInt((event.target as HTMLInputElement).name)
          this.d.selectedCardsArray.push(this.cardData[AddTOCartBtn]);
          console.log(this.d.selectedCardsArray);

        }
  ngOnInit() {
}
}
