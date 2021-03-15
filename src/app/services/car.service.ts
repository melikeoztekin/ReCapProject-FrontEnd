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
  apiUrl = 'https://localhost:44399/api/cars/';
  constructor(private httpClient: HttpClient) {}

  getCars():Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl+'getall');
  }
  getCarDtoList():Observable<ListResponseModel<CarDto>> {
    return this.httpClient.get<ListResponseModel<CarDto>>(this.apiUrl+'getcardto');
  }

}
