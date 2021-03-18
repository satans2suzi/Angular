import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  course = {
    title: "the Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2021, 3, 9)
  }
  text = 'hom nay laf asdasdasdasdasdfam malkdnja njkcansjdf';
  constructor() { }

  ngOnInit(): void {
  }

}
