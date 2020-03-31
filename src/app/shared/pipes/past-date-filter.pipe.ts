import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastDateFilter'
})
export class PastDateFilterPipe implements PipeTransform {

  transform(value: any, compareToDate: Date): any {

    let pastEvents = [];

    for (const event of value) {
      if(compareToDate > new Date(event.date)) {
        pastEvents.push(event);
      }
    }

    return pastEvents;
  }

}
