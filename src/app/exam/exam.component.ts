import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'exam',
  template: `<h1>{{name}} {{mark}}</h1>
  <input [(ngModel)]="mark" >
  <app-exam2 [mark] = "mark"  ></app-exam2>
    `,
  styles: ['h1 {color:red}']
})

export class ExamComponent {
  public name = 'Ani';
  public mark: number;

}
