import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details-documentary',
  templateUrl: './details-documentary.component.html',
  styleUrls: ['./details-documentary.component.css']
})
export class DetailsDocumentaryComponent implements OnInit {
  documentID: number = 0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( data=>{
        this.documentID = data.id;
      })
  }

}
