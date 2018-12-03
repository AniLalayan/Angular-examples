import {Directive, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit {

  constructor( private template: TemplateRef<string>, private view: ViewContainerRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
    }, 3000);
  }
}
