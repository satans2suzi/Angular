import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DocumentaryService} from "../../services/documentary.service";
import {DocumentaryModel} from "../../models/documentary.model";

@Component({
  selector: 'app-details-documentary',
  templateUrl: './details-documentary.component.html',
  styleUrls: ['./details-documentary.component.css']
})
export class DetailsDocumentaryComponent implements OnInit {
  title: string = 'Chi tiết công văn'
  documentID: any;
  documentDetails : any;
  constructor(private activatedRoute: ActivatedRoute,
              private documentaryServices: DocumentaryService) { }
  pdfSrc = "";
  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( data=>{
        this.documentID = data.id;
        // console.log(data)
      })
    this.documentaryServices.viewDocumentary(this.documentID)
      .subscribe(documentData =>{
          this.documentDetails = documentData;
          console.log(this.documentDetails)
      })
  }

}
