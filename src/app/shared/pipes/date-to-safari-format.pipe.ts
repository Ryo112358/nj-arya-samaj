import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateToSafariFormat',
    standalone: false
})
export class DateToSafariFormatPipe implements PipeTransform {

  /* Convert yyyy-MM-dd to yyyy/MM/dd */
  transform(value: any): any {
    
    // E.g. 2019-10-14 to 2019/10/14
    return value.replace(/-/g, "/");
  }

}
