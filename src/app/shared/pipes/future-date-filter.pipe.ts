import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'futureDateFilter',
    standalone: false
})
export class FutureDateFilterPipe implements PipeTransform {

  transform(value: any, compareToDate: Date): any {

    let futureEvents = [];

    for (const event of value) {
      if(new Date(event.date) >= compareToDate) {
        futureEvents.push(event);
      }
    }

    return futureEvents;
  }

}
