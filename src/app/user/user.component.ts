import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import {UserService} from '../user.service';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private userService = inject(UserService);
  private meta = inject(Meta);
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.userService.getUser(this.route.snapshot.paramMap.get('id')!).subscribe({
      next: user => {

        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('some', 'some value');
        }

        this.title.setTitle(user.username)
        this.meta.addTags([
          { property: 'description', content: user.name },
          { property: 'og:description', content: user.name },
          { property: 'og:title', content: user.name }
        ])
      }
    })
  }

}
