import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-delete-documentary',
  templateUrl: './delete-documentary.component.html',
  styleUrls: ['./delete-documentary.component.css']
})
export class DeleteDocumentaryComponent implements OnInit {

  documentID: number = 0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( data=>{
        this.documentID = data.id;
      })
  }

}
