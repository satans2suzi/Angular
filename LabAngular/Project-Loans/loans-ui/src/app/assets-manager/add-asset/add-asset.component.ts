import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {
  title = 'Thêm tài sản'
  constructor() { }

  ngOnInit(): void {
  }

}
