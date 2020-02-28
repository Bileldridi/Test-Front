import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contact'
})
export class ContactPipe implements PipeTransform {

  transform(value: any[], conact: string): any {
    if (value.length === 0 || conact === '') {
      return value;
    }

    return value.filter(item => (item.name.startsWith(conact)));

  }

}
