import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return [
      {name:'Anil', email:'anil@test.com'},
      {name:'Sam', email:'sam@test.com'},
      {name:'Bhaskar', email:'bhasker@gmail.com'},
      {name:'Peter',email:'peter@yahoo.com'}
    ]
  }
}
