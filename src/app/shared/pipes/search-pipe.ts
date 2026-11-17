import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(arr: any[], klem: string): any[] {
    return arr.filter((post) => {
      return post.user.name.toLowerCase().includes(klem.toLowerCase());
    });
  }
}
