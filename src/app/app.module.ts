import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EmplistComponent } from 'src/EmpList/emplist.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { BookDataComponent } from './Book-data/Book-data.component';
// import { EmplistComponent } from './emplist/emplist.component';
import {HttpClientModule} from '@angular/common/http';
import { BookService } from './Service/Book.service';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { JwtModule } from "@auth0/angular-jwt";
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { BuyComponent } from './buy/buy.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { PaymentModesComponent } from './payment-modes/payment-modes.component';
import { OnlinePayComponent } from './online-pay/online-pay.component';
import { ThanksComponent } from './thanks/thanks.component';
import { ChaatComponent } from './chaat/chaat.component';
import { ProductComponent } from './product/product.component';
import { MoviesComponent } from './movies/movies.component';
export function tokenGet() {
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    loginComponent,
    BookDataComponent,
    HomeComponent,
    CategoryComponent,
    RegistrationComponent,
    BuyComponent,
    AddCartComponent,
    PaymentModesComponent,
    OnlinePayComponent,
    ThanksComponent,
    ChaatComponent,
    ProductComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,JwtModule.forRoot({
      config: {
        tokenGetter: tokenGet,
        allowedDomains: ["*"],
        disallowedRoutes: []
      }
      })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
