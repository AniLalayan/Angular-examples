import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})

export class ChildComponent {


  @Output() button = new EventEmitter();

  // public name = 'Ani this is child component';

  onClick() {
    this.button.emit();
  }
}
