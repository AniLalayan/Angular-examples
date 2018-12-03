import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from '../users.service';


@Component({
  selector: 'app-experimental',
  templateUrl: './experimental.component.html',
  styleUrls: ['./experimental.component.css'],
  providers: [UsersService]
})
export class ExperimentalComponent  {
  coins = [];

  constructor(private userService: UsersService) {
    this.coins = userService.getMyItems();
  }

  // public name;
  // public a = 'Hello from child';
  //
  //
  //
  // @Output() childValue = new EventEmitter();
  //
  // fire() {
  //   this.childValue.emit(this.a);
  // }
  //
  // constructor() {
  // }
  //
  // ngOnInit() {
  // }


}
