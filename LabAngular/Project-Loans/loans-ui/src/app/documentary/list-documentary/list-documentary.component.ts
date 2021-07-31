import {Component, OnInit} from '@angular/core';
import {DocumentaryService} from '../../services/documentary.service';

@Component({
  selector: 'app-list-documentary',
  templateUrl: './list-documentary.component.html',
  styleUrls: ['./list-documentary.component.css']
})
export class ListDocumentaryComponent implements OnInit {
  title = 'Danh sách văn bản';
  documentaryList: any[] = [];
  page = 1;
  pageSize = 10;
  lengthDocumentList = 0;

  constructor(private documentaryService: DocumentaryService) {
  }

  ngOnInit(): void {
    this.getDocumentaryList();
  }

  getDocumentaryList(): any {
    this.documentaryService.getDocumentary()
      .subscribe((data: any) => {
        this.documentaryList = data.data as any;
        this.lengthDocumentList = this.documentaryList.length;
        console.log(this.documentaryList);
        console.log(this.lengthDocumentList);
      });
  }

  deleteDocumentary(row: any): any {
    this.documentaryService.deleteDocumentary(row._id)
      .subscribe(res => {
        this.getDocumentaryList();
      });
  }

}
