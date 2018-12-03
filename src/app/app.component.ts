import {Component, OnInit} from '@angular/core';
import {User} from './model/user';
import {ConfigService} from './service/config.service';
import {Observable, of, pipe} from 'rxjs';
import {filter, map, retry} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: User[] = [];
  id: number;

  constructor(private httpService: ConfigService) {
  }

  ngOnInit() {
    // const myObserver = of(1, 2, 3);
    // const a = pipe(filter((n: number) => n % 2 === 1));
    // const b = a(myObserver);
    // b.subscribe((data) => console.log('value is ' + data));

    // const myObserver = of(1, 2, 3, 5).pipe(  map(n => {
    //   if (n === 4) {
    //     throw new Error('Value is ' + 4);
    //   } else {
    //     console.log('value is ' + n);
    //   }
    // }),
    //   filter((n: number) => n % 2 === 0),
    // );
    // myObserver.subscribe(() => {
    // }, (err) => console.log(err));
    //
    this.httpService.getDataById(5).subscribe(data => console.log(data.name, data.age), (err) => console.error(err));
    // this.httpService.getData().subscribe(data   => this.user = data);
  }
}
