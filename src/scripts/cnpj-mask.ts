import { Directive, ElementRef, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appCnpjMask]'
})
export class CnpjMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const numericValue = value.replace(/\D/g, '');

  let formattedValue = '';
  if (numericValue.length <= 2) {
    formattedValue = numericValue;
  } else if (numericValue.length <= 5) {
    formattedValue = numericValue.substring(0, 2) + '.' + numericValue.substring(2);
  } else if (numericValue.length <= 8) {
    formattedValue = numericValue.substring(0, 2) + '.' + numericValue.substring(2, 5) + '.' + numericValue.substring(5);
  } else if (numericValue.length <= 12) {
    formattedValue = numericValue.substring(0, 2) + '.' + numericValue.substring(2, 5) + '.' + numericValue.substring(5, 8) + '/' + numericValue.substring(8);
  } else {
    formattedValue = numericValue.substring(0, 2) + '.' + numericValue.substring(2, 5) + '.' + numericValue.substring(5, 8) + '/' + numericValue.substring(8, 12) + '-' + numericValue.substring(12, 14);
  }

  if (formattedValue !== this.el.nativeElement.value) {
    this.el.nativeElement.value = formattedValue;
    this.el.nativeElement.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
  }
  }
}
