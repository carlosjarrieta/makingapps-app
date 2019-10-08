import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  user: User;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getUser().subscribe(data => {
    //   console.log(data);
    // });
  }

 

}
