import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class User1Service {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`http://localhost:3000/posts`);
  }

  register(user) {
    return this.http.post(`http://localhost:3000/posts`, user);
  }
}