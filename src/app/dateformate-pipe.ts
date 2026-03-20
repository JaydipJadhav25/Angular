import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformate',
})
export class DateformatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
