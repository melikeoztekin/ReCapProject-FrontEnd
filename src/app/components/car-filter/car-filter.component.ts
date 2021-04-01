import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {
  brands: Brand[] = [];
  colors: Color[] = [];
  brandIdFilter : number=0;
  colorIdFilter : number=0;

  constructor(
    private brandService:BrandService,
    private colorService:ColorService, private _router: Router) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(respone => {
      this.brands = respone.data;
    })
  }
  btnSorgula() {
   
    if (this.brandIdFilter !== 0 && this.colorIdFilter !== 0) {
      this._router.navigate(['cars/'], {
        queryParams: { brandId: this.brandIdFilter,colorId:this.colorIdFilter},
      });
    } else if (this.colorIdFilter !== 0) {
      this._router.navigate(['cars/'], {
        queryParams: { colorId:this.colorIdFilter},
      });
    } else if (this.brandIdFilter !== 0) {
      this._router.navigate(['cars/'], {
        queryParams: { brandId: this.brandIdFilter},
      });
    } else {
      this._router.navigate(['cars/'], {
        queryParams: { },
      });
    }
  }
  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
      console.log(this.colors);
    })
  }
  
  getSelectedBrand(brandId:string){
  
    this.brandIdFilter =parseInt(brandId) 
      console.log(brandId);
    return true;
   
  }

  getSelectedColor(colorId:string){
  
    this.colorIdFilter =parseInt(colorId)
      console.log(colorId);
    return true;
    
  }
}