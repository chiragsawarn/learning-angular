import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  url = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http:HttpClient) { }

  users(){
    // We can make a JSON server

    return this.http.get(this.url);
  }
}
