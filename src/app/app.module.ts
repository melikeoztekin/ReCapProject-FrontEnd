import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CardtoComponent } from './components/cardto/cardto.component';
import { CarfilterPipePipe } from './pipes/carfilter-pipe.pipe';
import { ColorfilterPipePipe } from './pipes/colorfilter-pipe.pipe';
import { BrandfilterPipePipe } from './pipes/brandfilter-pipe.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { RentalOperationComponent } from './components/rental-operation/rental-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColorComponent,
    BrandComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CardtoComponent,
    CarfilterPipePipe,
    ColorfilterPipePipe,
    BrandfilterPipePipe,
    CarFilterComponent,
    RentalOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
