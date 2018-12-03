import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {
   myObservable = of(1, 2, 3);
   myObserver = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };
  public Observable(observable) {

  }

}
