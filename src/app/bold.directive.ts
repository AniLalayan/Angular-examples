import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {Renderer2} from '@angular/core';

@Directive({
  selector: '[appBold]'
})

export class BoldDirective {

  @Input('Color') boldColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.elementRef.nativeElement.style.fontWeight = 'bold';
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.setFontWeight('bold');
    this.setColor();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontWeight('normal');
  }

  private setFontWeight(val: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', val);
  }

  private setColor() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.boldColor);
  }
}
