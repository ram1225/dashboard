import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  title: string = "This is first post";
  @Input('post') post: any;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  openViewDetails(){
    console.log(this.post);
    this.router.navigateByUrl('/details/'+this.post.id);
  }

}
