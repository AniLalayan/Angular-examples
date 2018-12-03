import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter, map} from 'rxjs/operators';


@Injectable()

export class ConfigService {

  constructor(private http: HttpClient) {}

  getData() {
    return  this.http.get('./src/app/mock/user.json');
  }

  getDataById(id: number) {
    return this.http.get('./src/app/mock/user.json').pipe(
      map((data: any[]) => data.find((user) => id  === user.id))
    );
  }
}

