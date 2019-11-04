import { Auth1Service } from 'src/app/auth1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string;
  constructor(private auth: Auth1Service) { }

  ngOnInit() {

    this.username = localStorage.getItem("LoggedInUser");
    console.log('username', this.username);
  }

}
