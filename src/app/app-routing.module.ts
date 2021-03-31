import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CardtoComponent } from './components/cardto/cardto.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
{path : "",pathMatch:"full", component:CarComponent},
{path : "cars", component:CarComponent},
{path:"cars/filter/:brandId/:colorId", component:CarComponent},
{path : "cars/brand/:brandId", component:CarComponent},
{path : "cars/color/:colorId", component:CarComponent},
{path:"cardto/:carId",component:CardtoComponent},
{path:"rentals/getrentaldto",component:RentalComponent},
{path:"rentals/:carId", component:RentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
