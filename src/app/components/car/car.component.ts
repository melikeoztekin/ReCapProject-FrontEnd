import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  filterText = '';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) => {
    //   if (params['colorId'] && params['brandId']) {
    //     console.log(params['colorId'] , params['brandId']);
    //     if (params['colorId'] != 0 && params['brandId'] != 0) {
    //       this.getCarDtos(params['colorId'], params['brandId']);
    //     }
    //      else if (params['colorId'] != 0) {
    //       this.getCarDtoListByColor(params['colorId']);
    //     } 
    //     else if (params['brandId']!= 0 ) {
    //       this.getCarDtoListByBrand(params['brandId']);
    //     } 
    //     else {
    //       this.router.navigate(['cars/']);
    //     }
    //   } else if (params['brandId']) {
    //     this.getCarDtoListByBrand(params['brandId']);
    //   } else if (params['colorId']) {
    //     this.getCarDtoListByColor(params['colorId']);
    //   } else {
    //     this.getCarDtoList();
    //   }
    // });
    this.activatedRoute.queryParams.subscribe((params) => {
      // if(params['carSearch'])
      // {
      //      this.filterText=params['carSearch'];
      // }
      console.log(params['colorId'], params['brandId']);
      if (params['colorId'] && params['brandId']) {
        this.getCarDtos(params['brandId'],params['colorId']);
      } else if (params['colorId']) {
        this.getCarDtoListByColor(params['colorId']);
      } else if (params['brandId']) {
        this.getCarDtoListByBrand(params['brandId']);
      } else {
        this.getCarDtoList();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      console.log(response.data,this.cars)
    });
  }
  getCarDtoList() {
    this.carService.getCarDtoList().subscribe((response) => {
      this.cardtos = response.data;
    });
  }
  getCarDtoCarId(carId: number) {
    this.carService.getCarDtoCarId(carId).subscribe((response) => {
      this.cardtos = response.data;
    });
  }
  getCarDtoListByBrand(brandId: number) {
    this.carService.getCarDtoListByBrand(brandId).subscribe((response) => {
      this.cardtos = response.data;
    });
  }
  getCarDtoListByColor(colorId: number) {
    this.carService.getCarDtoListByColor(colorId).subscribe((response) => {
      this.cardtos = response.data;
    });
  }

  getCarDtos(brandId: number, colorId: number) {
    this.carService.getCarDtos(brandId, colorId).subscribe((response) => {
      this.cardtos = response.data;
    });
  }
}
