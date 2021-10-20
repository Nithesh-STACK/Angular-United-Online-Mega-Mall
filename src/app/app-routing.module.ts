import { componentFactoryName } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplistComponent } from 'src/EmpList/emplist.component';
import { loginComponent } from './login/login.component'; 
import { BookDataComponent } from './Book-data/Book-data.component'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { RegistrationComponent } from './registration/registration.component';
import { BuyComponent } from './buy/buy.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { PaymentModesComponent } from './payment-modes/payment-modes.component';
import { OnlinePayComponent } from './online-pay/online-pay.component';
import { ThanksComponent } from './thanks/thanks.component';
import { ChaatComponent } from './chaat/chaat.component';
import { ProductComponent } from './product/product.component';
import { MoviesComponent } from './movies/movies.component';
const routes: Routes = [
{path:'login',component:loginComponent},
{path:'book',component:BookDataComponent},
{path:'homes',component:HomeComponent},
{path:'cat',component:CategoryComponent},
{path:'reg',component:RegistrationComponent},
{path:'buy',component:BuyComponent},
{path:'cart',component:AddCartComponent},
{path:'pay',component:PaymentModesComponent},
{path:'onlinepay',component:OnlinePayComponent},
{path:'thanks',component:ThanksComponent},
{path:'chat',component:ChaatComponent},
{path:'product',component:ProductComponent},
{path:"movie",component:MoviesComponent},
{path:"privacy",component:EmplistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
