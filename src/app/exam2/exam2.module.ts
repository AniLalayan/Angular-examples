import {NgModule} from '@angular/core';
import {Exam2Component} from './exam2.componenet';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    Exam2Component
  ],
  imports: [FormsModule, BrowserModule],
  exports: [Exam2Component],
  providers: [],
})

export class Exam2Module {

}
