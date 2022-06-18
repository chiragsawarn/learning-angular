import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  tasks : any[] = [];
  addTask(dataFromInputField:string){
    this.tasks.push({id:this.tasks.length, name:dataFromInputField});
  }
  removeTask(task:any){
    let indexToRemove = this.tasks.indexOf(task);
    this.tasks.splice(indexToRemove,1);
  }
}
