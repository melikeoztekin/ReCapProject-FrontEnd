import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDto } from '../models/rentalDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44399/api/';
  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+'rentals/getall');
  }

  getRentalDtoList(): Observable<ListResponseModel<RentalDto>> {
    return this.httpClient.get<ListResponseModel<RentalDto>>(this.apiUrl+'rentals/getrentaldto');
  }

  addRental(rental: Rental) {
    let newPath = this.apiUrl + 'rentals/add';
    this.httpClient.post(newPath, rental).subscribe();
  }

  isCarAvailable(carId: number): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'rentals/iscaravailable?carId=' + carId;
    return this.httpClient.get<ResponseModel>(newPath);
  }
}
