import { Component, OnInit } from '@angular/core';
import {PostModels} from "../models/post.models";
import {UsersModels} from "../models/users.models";
import {DemoHttpService} from "../services/demo-client-http/demo-http.service";

@Component({
  selector: 'app-demo-client-http',
  templateUrl: './demo-client-http.component.html',
  styleUrls: ['./demo-client-http.component.css']
})
export class DemoClientHttpComponent implements OnInit {
  users: UsersModels[];

  constructor( private servicesDemo: DemoHttpService) { }

  ngOnInit(): void {

      this.servicesDemo.getUser()
        .subscribe(response => {
          this.users = response;
        }
      );

  }
  selectUser: UsersModels;
  onSelected(user: UsersModels): void{
      this.selectUser = user;
      console.log(this.selectUser)
  }
}
