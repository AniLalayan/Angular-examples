import { Injectable } from '@angular/core';

// import {USERS} from './test/users-list';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
coins = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
  {id: 3, name: 'c'},
  {id: 4, name: 'd'},
  {id: 5, name: 'e'}
]

  getMyItems() {
    return this.coins;
  }

}
