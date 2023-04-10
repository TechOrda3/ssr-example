import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {of, tap} from 'rxjs';

const STATE_KEY_ITEMS = makeStateKey('users');

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private state = inject(TransferState);

  getUsers() {
    if (this.state.hasKey(STATE_KEY_ITEMS)) {
      return of(this.state.get(STATE_KEY_ITEMS, null));
    }
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        tap(data => this.state.set(STATE_KEY_ITEMS, data))
      );
  }

  getUser(userId: string) {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/' + userId)
  }
}
