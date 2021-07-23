import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattedSecondsPipe',
})
export class FormattedSecondsPipePipe implements PipeTransform {
  transform(value: number): string {
    return (Math.floor(value / 60) + ':' + (value % 60)).toString();
  }
}
