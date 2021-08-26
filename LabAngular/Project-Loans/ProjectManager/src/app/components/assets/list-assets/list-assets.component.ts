import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-assets',
  templateUrl: './list-assets.component.html',
  styleUrls: ['./list-assets.component.css']
})
export class ListAssetsComponent implements OnInit {
  title = 'Danh sách tài sản'
  constructor() { }

  ngOnInit(): void {
  }

}
