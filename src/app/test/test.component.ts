import { Component, OnInit } from '@angular/core';
import {Users} from './users';
import {UsersService} from '../users.service';

@Component({
  // moduleId: module.id,
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public title = 'This is a page written in Angular 6';

  public date: string = new Date().toDateString();
  public time: string = new Date().toTimeString();
  public test: Users;
  public list: Array<any> = [
    { age: 20, name: 'Ann' },
    { age: 25, name: 'Max' },
    { age: 28, name: 'Margaret' },
    { age: 19, name: 'John' },
    { age: 21, name: 'Jennifer' },
    { age: 30, name: 'Adrien' },
    { age: 18, name: 'Tom' },
    { age: 22, name: 'Mary'}
  ];
  public formSubmited = false;

  constructor(private userService: UsersService) {
    // this.list = userService.getUsers();
    setInterval(() => {
      this.time = new Date().toTimeString();
    }, 1000);
  }

  ngOnInit() {
    this.test = {
      age: 20,
      name: 'Bob'
    };
  }

  public ClearForm() {
    this.test = new Users();
  }

  public submited() {
    this.formSubmited = true;
  }

}
