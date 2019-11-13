import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastDateFilter'
})
export class PastDateFilterPipe implements PipeTransform {

  transform(value: any, compareToDate: Date): any {

    let pastEvents = [];

    for (const event of value) {
      if(new Date(event.date) < compareToDate) {
        pastEvents.push(event);
      }
    }

    return pastEvents;
  }

}
