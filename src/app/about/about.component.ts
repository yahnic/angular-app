import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  h1Style: boolean = false;
  users = {};
  constructor(private dataService: DataService) { }
  
ngOnInit() {
  this.dataService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    }
  );
}
}
