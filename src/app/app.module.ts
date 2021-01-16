import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    CartComponent,
    ProductListComponent,
    FiltersComponent,
    ProductItemComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
