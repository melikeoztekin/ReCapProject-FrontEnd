import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/car-image';
import { CarDto } from 'src/app/models/carDto';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardto',
  templateUrl: './cardto.component.html',
  styleUrls: ['./cardto.component.css'],
})
export class CardtoComponent implements OnInit {
  cardtos: CarDto[] = [];
  carImages: CarImage[] = [];

  constructor(
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarImageByCarId(params['carId']);
        this.getCarDtoCarId(params['carId']);
      }
    });
  }

  getCarImageByCarId(carId:number){
    this.carImageService.getCarImageByCarId(carId).subscribe(response=>{
      this.carImages=response.data;
    })
   }

   getCarDtoCarId(carId:number){
    this.carService.getCarDtoCarId(carId).subscribe(response=>{
      this.cardtos=response.data;
    })
  }

  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  } 
}
