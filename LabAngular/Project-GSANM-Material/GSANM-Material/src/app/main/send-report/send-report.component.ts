import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {ApiJsonService} from '../../services/api-json.service'
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-send-report',
  templateUrl: './send-report.component.html',
  styleUrls: ['./send-report.component.css']
})
export class SendReportComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['Thời gian', 'Mạng giám sát', 'Địa chỉ đích', 'Địa chỉ nguồn', 'Loại cảnh báo', 'Nội dung', 'Hành động'];
  public dataSource: any;
  searchkey: string = '';

  constructor(private api: ApiJsonService) {
  }

  ngOnInit(): void {
    this.getAllReport();
  }

  ngAfterViewInit(): any {
    // this.dataSource.paginator = this.paginator;
  }

  applyFilter(): any {
    // const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.searchkey.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllReport(): any {
    this.api.getReport()
      .subscribe((res: any) => {
        this.dataSource = new MatTableDataSource(res);
        console.log(this.dataSource)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  onSearchClear(): any {
    this.searchkey = "";
    this.applyFilter();
    this.getAllReport();
  }
}
