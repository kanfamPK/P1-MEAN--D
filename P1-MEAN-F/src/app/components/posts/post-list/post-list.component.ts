import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../models/post.model';
import { PostService } from '../../../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList:Post[] = [];
  private postSub : Subscription;

  constructor(
    private postsService: PostService,
  ) { }

  ngOnInit(): void {
    this.postList = this.postsService.getPost();
    this.postSub = this.postsService.getUpdatedPosts().subscribe((data)=>{
      this.postList = [...data];
    });
  }

  ngOnChanges(): void {
    console.log('xxxxxx',this.postList);
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

  nextStep() {

  }
}
