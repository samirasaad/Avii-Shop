import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public userData:object;
  constructor() {
     this.userData={};
    }
  submit(data:NgForm):void
  {    if(data.valid)
    {
      console.log(this.userData);
    }

  }
  ngOnInit() {
   }

}
