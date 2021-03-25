import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  cardtos: CarDto[] = [];
  
  constructor(private carService : CarService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarDtoListByBrand(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarDtoListByColor(params["colorId"]);
      }
      else{
        this.getCarDtoList();
      }
    })
  }
  
  getCars() {
    this.carService.getCars().subscribe(response =>{
      this.cars = response.data
    })
  }
  getCarDtoList() {
    this.carService.getCarDtoList().subscribe(response =>{
      this.cardtos = response.data
    })
  }
  getCarDtoCarId(carId:number){
    this.carService.getCarDtoCarId(carId).subscribe(response=>{
      this.cardtos=response.data;
    })
  }
  getCarDtoListByBrand(brandId:number) {
    this.carService.getCarDtoListByBrand(brandId).subscribe(response =>{
      this.cardtos = response.data;
    })
  }
  getCarDtoListByColor(colorId:number) {
    this.carService.getCarDtoListByColor(colorId).subscribe(response =>{
      this.cardtos = response.data;
    })
  }
}
