import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LabAngular';
  isActivate = true;
  styleButton = "btn btn-primary";
  isTrue = 20;
  event = "Hoang Van Thai";

  isClick() {
    alert("da click vao!S")
  }

  isClick2($event) {
    console.log("da click button 2", $event);
  }
  onSave($event) {
    $event.stopPropagation();
    console.log("button was clicked", $event);
  }
  onDivClicked() {
    console.log("Div was clicked");
  }
  onKeyUpTemplteVariables(email) {
    console.log(email);
  }
  email2 = "thai@example.com";
  onKeyupTwoWayBinding() {
    console.log(this.email2)
  }

  post = {
    title: "Title",
    isFavorite: false
  }
  onFavoriteChanged() {
    console.log("Favorite Changed");
  }
}
