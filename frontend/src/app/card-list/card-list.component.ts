import { User } from './../interfaces/user';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  users: Array<User> = [];
  navigationList: Array<Number> = [];
  page: Number;
  totalPages: Number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    // Get Page
    this.page = this.route.snapshot.params.page;
    // Get Users
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers(this.page).subscribe((response: any) => {
      this.users = response.data;
      this.totalPages = response.total_pages;
      this.generateNavigation();
    });
  }

  generateNavigation(): void {
    this.navigationList = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.navigationList.push(i);
    }
  }

  goTo(page: Number): void {
    this.router.navigate(['/card-list/' + page]);
    this.page = page;
    this.getUsers();
  }

  editId(id: Number): String {
    let userid = id,
      newId = 'card-item-' + userid;

    return newId;
  }
}
