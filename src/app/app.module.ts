//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { CartComponent } from './cart/cart.component';

//service
import { QueryService } from './query.service';
import { DetailService } from './detail.service';

//routing paths
const navigation:Routes=[
  {
    //to start from home component
    path:"",
    component:HomeComponent,
  },
    {
      path:'detail/:name/:category/:price',
      component:DetailComponent,
    },
    {
      path:'form',
      component:FormComponent,
    },
    {
    path:'cart',
    component:CartComponent,
  }


]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    FormComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(navigation),
    FormsModule,
    AngularFontAwesomeModule,
    Ng2SearchPipeModule
    ],
  providers: [
    QueryService,
    DetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
