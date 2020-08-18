import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: Http) {}

  getUsers(page: Number): any {
    return this.http
      .get(`https://reqres.in/api/users?page=${page}`)
      .pipe(map((response) => response.json()));
  }
}
