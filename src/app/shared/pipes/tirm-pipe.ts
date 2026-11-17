import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tirm',
})
export class TirmPipe implements PipeTransform {
  transform(text: string, limit: number): string {
    return text.split(' ', limit).join(' ');
  }
}
