import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../models/post.model'
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  @Output() createdPost = new EventEmitter<Post>();

  constructor(
    private postsService: PostService
  ) { }

  ngOnInit(): void {
  }

  createPost(form) {
    // console.dir(postInput)
    // this.postContent = postInput.value;
    console.log(form);
    if (form.value.title && form.value.content) {
      this.postsService.addPost(form.value.title,form.value.content);
      form.resetForm();
      // form.value.title = '';
      // form.value.content = '';
    }
  }
}
