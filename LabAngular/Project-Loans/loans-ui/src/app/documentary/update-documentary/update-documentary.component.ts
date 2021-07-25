import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-documentary',
  templateUrl: './update-documentary.component.html',
  styleUrls: ['./update-documentary.component.css']
})
export class UpdateDocumentaryComponent implements OnInit {
  documentID: number = 0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( data=>{
        this.documentID = data.id;
      })
  }

}
