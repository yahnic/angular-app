import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up he

@Injectable({
 providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient){}

  makeApiCall() {
    return console.log('Api Data Object');
  } 

  getTerminals() {
    return this.httpClient.get('https://jibrila.herokuapp.com/api/terminals');
  }
  getUsers(){ 
    return this.httpClient.get('https://reqres.in/api/users')
  }
}