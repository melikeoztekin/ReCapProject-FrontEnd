import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44399/api/';
  constructor(private httpClient: HttpClient) {}

  getCars():Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+'cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
  getCarDtoList():Observable<ListResponseModel<CarDto>> {
    let newPath=this.apiUrl+'cars/getcardto';
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarDtoListByBrand(brandId:number):Observable<ListResponseModel<CarDto>> {
    let newPath=this.apiUrl+'cars/getbybrand?brandId='+brandId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarDtoListByColor(colorId:number):Observable<ListResponseModel<CarDto>> {
    let newPath=this.apiUrl+'cars/getbycolor?colorId='+colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
}
