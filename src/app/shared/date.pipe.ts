import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TransformDate',
  standalone: true,
})
export class TransformDate implements PipeTransform {
  constructor() {}
  transform(dateAsString: any) {
    if (dateAsString != '') {
      const date = new Date(dateAsString);
      return date.toLocaleDateString('en-US', { weekday: 'short' });
    } else {
      return 'Loading...';
    }
  }
}
