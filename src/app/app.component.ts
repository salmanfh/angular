import { Component } from '@angular/core';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate= new Promise(
    (resolve,reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );
 
  posts = [
    {
      
      title: 'Mon premier post',
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita itaque iusto optio nesciunt illum delectus deleniti. Aliquam quod iste, rerum ut cupiditate quo illo voluptate eveniet quas quidem officiis eaque.",
      loveIts: 0,
    },
    {
      title: 'Mon deuxième post',
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita itaque iusto optio nesciunt illum delectus deleniti. Aliquam quod iste, rerum ut cupiditate quo illo voluptate eveniet quas quidem officiis eaque.",
      loveIts: 0,
    },
    {
      title: 'Mon troisième post',
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita itaque iusto optio nesciunt illum delectus deleniti. Aliquam quod iste, rerum ut cupiditate quo illo voluptate eveniet quas quidem officiis eaque.",
      loveIts: 0,
    }
  ];

  prospects = [
    {
      name:"salman",
      fonct:"developer"
    },
    {
      name:"ayoub",
      fonct:"designer"
    },
    {
      name:"kalil",
      fonct:"developer"
    }
  ];
  
  

  constructor(){
    setTimeout(
      () => {
        this.isAuth = true;
      },
      4000
    );
  }

  onSubmit(){
    console.log(this.isAuth);
  }
}
