import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-documentary',
  templateUrl: './list-documentary.component.html',
  styleUrls: ['./list-documentary.component.css']
})
export class ListDocumentaryComponent implements OnInit {
  title = "Documentary"
  constructor() { }

  ngOnInit(): void {
  }

}
