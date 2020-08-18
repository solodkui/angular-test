import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: Array<User> = [
    {
      id: 1,
      email: 'sometestemail@email.com',
      firstName: 'George',
      lastName: 'Bluth',
      avatar: 'user1.png',
    },
    {
      id: 2,
      email: 'sometestemail@email.com',
      firstName: 'George',
      lastName: 'Bluth',
      avatar: 'user1.png',
    },
    {
      id: 3,
      email: 'sometestemail@email.com',
      firstName: 'George',
      lastName: 'Bluth',
      avatar: 'user1.png',
    },
    {
      id: 4,
      email: 'sometestemail@email.com',
      firstName: 'George',
      lastName: 'Bluth',
      avatar: 'user1.png',
    },
    {
      id: 5,
      email: 'sometestemail@email.com',
      firstName: 'George',
      lastName: 'Bluth',
      avatar: 'user1.png',
    },
    {
      id: 6,
      email: 'sometestemail@email.com',
      firstName: 'George',
      lastName: 'Bluth',
      avatar: 'user1.png',
    },
    {
      id: 7,
      email: 'sometestemail@email.com',
      firstName: 'George',
      lastName: 'Bluth',
      avatar: 'user1.png',
    },
    {
      id: 8,
      email: 'sometestemail@email.com',
      firstName: 'George',
      lastName: 'Bluth',
      avatar: 'user1.png',
    },
    {
      id: 9,
      email: 'sometestemail@email.com',
      firstName: 'George',
      lastName: 'Bluth',
      avatar: 'user1.png',
    },
    {
      id: 10,
      email: 'sometestemail@email.com',
      firstName: 'George',
      lastName: 'Bluth',
      avatar: 'user1.png',
    },
    {
      id: 11,
      email: 'sometestemail@email.com',
      firstName: 'George',
      lastName: 'Bluth',
      avatar: 'user1.png',
    },
    {
      id: 12,
      email: 'sometestemail@email.com',
      firstName: 'George',
      lastName: 'Bluth',
      avatar: 'user1.png',
    },
    {
      id: 13,
      email: 'sometestemail@email.com',
      firstName: 'George',
      lastName: 'Bluth',
      avatar: 'user1.png',
    },
  ];

  constructor() {}

  getPages(): Number {
    return Math.ceil(this.users.length / 6);
  }

  getUsers(page: Number): Array<User> {
    let users = [];
    for (let i = +page * 6; i > +page * 6 - 6; i--) {
      if (this.users[i - 1]) {
        users.push(this.users[i - 1]);
      }
    }
    return users;
  }
}
