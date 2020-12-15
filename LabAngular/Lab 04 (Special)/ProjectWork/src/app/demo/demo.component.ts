import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  name = '';
  constructor() { }

  ngOnInit(): void {
  }
  // showEvent(event){
  //   this.name = event.target.value;
  // }
}
