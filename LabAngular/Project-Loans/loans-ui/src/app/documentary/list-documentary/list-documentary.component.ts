import { Component, OnInit } from '@angular/core';
import {DocumentaryService} from "../../services/documentary.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-list-documentary',
  templateUrl: './list-documentary.component.html',
  styleUrls: ['./list-documentary.component.css']
})
export class ListDocumentaryComponent implements OnInit {
  title = "Documentary";
  documentaryResult: any;
  documentaryList: any;
  constructor(private documentaryService: DocumentaryService) { }

  ngOnInit(): void {
    this.getDocumentaryList();
  }

  getDocumentaryList(){
    this.documentaryService.getDocumentary()
      .subscribe((data: any) =>{
        this.documentaryResult = data;
        this.documentaryList = this.documentaryResult.data;
        console.log(this.documentaryList)
      })
  }
  deleteDocumentary(row: any){
    this.documentaryService.deleteDocumentary(row._id)
      .subscribe(res =>{
        alert("deleted");
        this.getDocumentaryList();
      })
  }
}
