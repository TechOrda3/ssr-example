import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {tap} from 'rxjs';

const STATE_KEY_ITEMS = makeStateKey('users');

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private state = inject(TransferState);
  loaded = false;

  getUsers() {
    if (!this.loaded) {
      console.log('inside')
      return this.http.get<any>('https://jsonplaceholder.typicode.com/users').pipe(
        tap(users => this.state.set(STATE_KEY_ITEMS, users))
      )
    } else {
      this.loaded = true;
      return;
    }
  }

  getUser(userId: string) {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/' + userId)
  }
}
