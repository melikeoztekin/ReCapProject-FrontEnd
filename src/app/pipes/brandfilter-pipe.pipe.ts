import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';
import { CarDto } from '../models/carDto';

@Pipe({
  name: 'brandfilterPipe'
})
export class BrandfilterPipePipe implements PipeTransform {

  transform(value: Brand[],filterText: string): Brand[] {
    filterText = filterText? filterText.toLocaleLowerCase():"";
    return filterText?value.filter((c:Brand)=>c.brandName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
