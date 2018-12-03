import {Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {EventEmitter} from 'selenium-webdriver';
import {Users} from './test/users';
import {ExperimentalComponent} from './experimental/experimental.component';
import {UsersService} from './users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  array = [];

  constructor(private userService: UsersService) {
    this.array = userService.getMyItems();
  }


  public f() {
    alert('some function from parent');
  }

  // title = 'untitled';
  // public title1: string;
  // public lang = [
  //   {id: 1, name: 'Java'},
  //   {id: 2, name: 'JS'},
  //   {id: 3, name: 'Python'},
  //   {id: 4, name: 'C#'}
  // ];
  // public list = [
  //   {id: 1, name: 'Ann'},
  //   {id: 2, name: 'Andrew'},
  //   {id: 3, name: 'Mick'},
  //   {id: 4, name: 'Anna'},
  //   {id: 5, name: 'John'},
  //   {id: 6, name: 'Jack'},
  //   {id: 7, name: 'Juliya'},
  //   {id: 8, name: 'Anlex'},
  //   {id: 9, name: 'Mary'},
  //   {id: 10, name: 'Morgan'},
  //   {id: 11, name: 'Sam'},
  //   {id: 12, name: 'Suzan'}
  //
  // ];

  // public center = 'center'
  //
  // public message;
  // public user1 = undefined;
  // public user2 = new Users();
  //
  // public key = '';
  // public enterKey = '';
  // public blur = '';
  // public itemList = [];
  //
  // public color = 'green';
  //
  // public colour: string;
  //
  // birthday = new Date(1988, 3, 15);
  //
  // public number = 5;
  //
  // constructor() {
  //   this.user2 = {name: 'Ann'};
  // }
  //
  //
  // display(event) {
  //   console.log('a = ' + event);
  // }
  //
  // trackByElements (name: string, lang) {
  //   return lang.name;
  // }
  //
  // onKey(event) {
  //   this.key += event.target.value + '|';
  // }
  //
  // onEnter(sentence: string) {
  //   this.enterKey = sentence;
  // }
  //
  // onBlur(value: string) {
  //   this.blur = value;
  // }
  //
  // addItem(item: string) {
  //   if (item) {
  //     this.itemList.push(item);
  //   }
  // }

}
