import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  terminals = {};                   
  constructor(private dataService: DataService) { }
 
  ngOnInit() {
    this.dataService.getTerminals().subscribe(data => {
        this.terminals = data;
        console.log(this.terminals);
      }
    );
  }

  firstClick() {
     this.dataService.makeApiCall();
  }

  
}
