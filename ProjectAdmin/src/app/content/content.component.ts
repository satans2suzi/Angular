import { Component, OnInit } from '@angular/core';
import { sanpham } from '../../../models/sanpham';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  sanpham1: sanpham ={
    id: 1,
    name: "Iphone 7 plus",
    price : 5.99,

  }
  sanpham2: sanpham ={
    id: 2,
    name: "Sanmsung note 9",
    price : 6.99,

  }
  constructor() { }

  ngOnInit(): void {
  }

}
