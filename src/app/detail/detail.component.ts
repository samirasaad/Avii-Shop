import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  object:object;

  get selectedCardObject():object {
    return this.d.selectedCardObject;
 }
 set selectedCardObject(value: object) {
    this.d.selectedCardObject = value;

 }

  constructor(private d : DetailService) {
    this.object={};
 }
 addToCart($event): void {
      const AddTOCartBtn:number = parseInt((event.target as HTMLInputElement).name);
      this.d.selectedCardsArray.push(this.object);
      console.log(this.d.selectedCardsArray);

    }
  ngOnInit() {
    this.object=this.d.selectedCardObject;
  }

}
