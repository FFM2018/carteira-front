import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpecialCharacters'
})
export class RemoveSpecialCharactersPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/[^\d]/g, '');
  }

}
