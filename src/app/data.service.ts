import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './model/posts.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public ROOT_URL = "https://jsonplaceholder.typicode.com/";

  constructor(private _httpClient: HttpClient) { }

  getPosts() {
    return this._httpClient.get<Post[]>(`${this.ROOT_URL}/posts`);
  }
}
