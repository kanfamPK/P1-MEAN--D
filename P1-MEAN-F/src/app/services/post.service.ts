import { Injectable, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts : Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor() { }

  getPost() {
    return [...this.posts]
  }

  getUpdatedPosts() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    let post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
