import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalDto } from 'src/app/models/rentalDto';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  rentaldtos : RentalDto[] = [];

  constructor(private rentalService : RentalService) { }

  ngOnInit(): void {
    this.getRentals();
    this.getRentalDtoList();
  }

  getRentals() {
    this.rentalService.getRentals().subscribe(response =>{
      this.rentals = response.data
    })
  }

  getRentalDtoList() {
    this.rentalService.getRentalDtoList().subscribe(response =>{
      this.rentaldtos = response.data
    })
  }
}
