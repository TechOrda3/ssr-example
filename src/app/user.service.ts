import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  getUsers() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
  }

  getUser(userId: string) {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/' + userId)
  }
}
