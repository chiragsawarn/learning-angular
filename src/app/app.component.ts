import { Component } from '@angular/core';
import { UsersDataService} from './services/users-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'API call using service';
  pokemons:any;
  
  constructor(private userData:UsersDataService){
    userData.users().subscribe((data:any)=>{
      console.warn("userData",data.results);
      this.pokemons = data.results;
    });
  }
}
