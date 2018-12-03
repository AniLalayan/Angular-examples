import {Component, Input, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-exam2',
  template: `
    <h2>Anjelika</h2>
    <p *ngIf='!!status'>
      {{mark}}
    </p>

  `,
  styles: ['h2{color:green}']
})
export class Exam2Component implements OnChanges {

  constructor() {
  }


  @Input() public mark;
  public status = false;

  ngOnChanges(value: SimpleChanges) {
    this.status = false;
    if (typeof (+value.mark.currentValue) === 'number' && !isNaN(+value.mark.currentValue)) {
      this.status = true;
      console.log(+value.mark.currentValue);
    }

  }
}
