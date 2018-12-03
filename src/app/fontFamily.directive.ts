import {Directive, HostBinding} from '@angular/core';
import { ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appFontFamily]',
  // host: {
  //   '(mouseenter)': 'onMouseEnter()'
  // }
})

export class FontFamilyDirective {

  constructor(private elementRef: ElementRef) {
   // this.elementRef.nativeElement.style.fontFamily = 'Courier New';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setFontFamily('Courier New');
    this.setBgc('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontFamily('Helvetica Neue');
    this.setBgc('white');
  }

  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }

  private setFontFamily(val: string) {
    this.elementRef.nativeElement.style.fontFamily = val;
  }

  private setBgc(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
