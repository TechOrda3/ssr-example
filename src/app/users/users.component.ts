import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Meta} from '@angular/platform-browser';
import {UserService} from '../user.service';
import {RouterLinkWithHref} from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private meta = inject(Meta);
  users = inject(UserService).getUsers();

  ngOnInit(): void {
    // this.meta.addTag({ content: 'Это страница пользователей. Вы можете здесь посмотреть список', property: 'description' });
    this.meta.addTags([
      { content: 'Это страница пользователей. Вы можете здесь посмотреть список', property: 'description' },
      { content: 'Это страница пользователей. Вы можете здесь посмотреть список', property: 'og:description' }
    ]);

  }

}
