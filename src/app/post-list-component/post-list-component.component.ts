import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { 
    this.created_at = new Date();
  }

  ngOnInit() {
  }

  loveIt(){
    this.loveIts++;
    console.log(this.loveIts);
  }
  dontLoveIts(){
    this.loveIts--;
    console.log(this.loveIts);

  }

}
