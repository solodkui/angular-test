import { User } from './../interfaces/user';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import TweenMax from 'gsap';
// import {  }

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  users: Array<User> = [];
  navigationList: Array<Number> = [];
  page: Number;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    // Get Page
    this.page = this.route.snapshot.params.page;
    this.getPageInfo();
  }

  goTo(page: Number): void {
    this.router.navigate(['/card-list/' + page]);
    this.page = page;
    this.getPageInfo();
  }

  getPageInfo(): void {
    // Get Users
    this. users = [];
    this.users = this.usersService.getUsers(this.page);
    // Generate Navigation
    this.navigationList = [];
    for (let i = 0; i < this.usersService.getPages(); i++) {
      this.navigationList.push(i + 1);
    }
  }

  editId(id: Number): String {
    let
      userid = id,
      newId = 'card-item-' + userid;

    return newId;
  }
}
