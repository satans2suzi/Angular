import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ReportModel} from "../../../model/model-demo/demo.model";
import {ApiDemoService} from "../../../services/service-demo/api-demo.service";


@Component({
  selector: 'app-table2-demo',
  templateUrl: './table2-demo.component.html',
  styleUrls: ['./table2-demo.component.css']
})


export class Table2DemoComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['Thời gian', 'Mạng giám sát', 'Địa chỉ đích', 'Địa chỉ nguồn', 'Loại cảnh báo', 'Nội dung', 'Hành động'];
  public dataSource;
  searchkey: string;
  constructor(private api: ApiDemoService) {
  }


  ngOnInit(): void {
    // this.api.getReport()
    // this.dataSource = new MatTableDataSource(users);
    this.getAllReport();
  }

  ngAfterViewInit(): any {
    // this.dataSource.paginator = this.paginator;
    this.getAllReport();
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
      .subscribe(res => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
      });
  }
  onSearchClear(): any{
    this.searchkey = "";
    this.applyFilter();
    this.getAllReport();
  }
}

