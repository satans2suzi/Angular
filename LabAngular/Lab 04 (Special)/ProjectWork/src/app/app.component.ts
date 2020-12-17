import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectWork';
  imageUrl : string;
  word ="";
  status : boolean = true;
  red = "red";
  yellow = "yellow";
  redirect(){
    this.status = !this.status;
    if (this.status == true){
      this.imageUrl = "https://miro.medium.com/max/480/1*VKY-Ldkt-iHobItql7G_5w.png"
    }else{
      this.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
    }
  }
}
