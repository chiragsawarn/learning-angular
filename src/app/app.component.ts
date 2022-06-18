import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Passing data to child component';
  randomVal = Math.floor(Math.random()*100);
  updateVal(){
    this.randomVal = Math.floor(Math.random()*100);
  }
}
