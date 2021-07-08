import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { ReportModel } from "../../../model/model-demo/demo.model";
import { ApiDemoService } from "../../../services/service-demo/api-demo.service";
import { NameDomain } from "../../../model/report.model";

@Component({
  selector: 'app-table2-demo',
  templateUrl: './table2-demo.component.html',
  styleUrls: ['./table2-demo.component.css']
})



export class Table2DemoComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  listDomain: NameDomain[] = [
    { id: 1, nameDomain: 'Tạp chí An Toàn Thông Tin', status: false },
    { id: 2, nameDomain: "Ban Cơ Yếu", status: false },
    { id: 3, nameDomain: "Bộ Khoa học Công nghệ", status: false },
    { id: 4, nameDomain: "Bắc Ninh", status: false },
    { id: 5, nameDomain: "Bộ Ngoại Giao", status: false },
    { id: 6, nameDomain: "Bộ Tư Pháp", status: false },
    { id: 7, nameDomain: "Chứng thực số và Bảo mật thông tin", status: false },
    { id: 8, nameDomain: "Cơ Yếu Bộ Ngoại giao", status: false },
    { id: 9, nameDomain: "Đà Nẵng", status: false },
    { id: 10, nameDomain: "Hà Nội", status: false },
    { id: 11, nameDomain: "Hồ Chí Minh", status: false },
    { id: 12, nameDomain: "Phòng Giám sát An ninh mạng", status: false },
    { id: 13, nameDomain: "Quảng Nam", status: false },
    { id: 14, nameDomain: "Thái Bình", status: false },
    { id: 15, nameDomain: "Văn phòng Chính phủ", status: false },
    { id: 16, nameDomain: "Văn phòng Quốc hội", status: false }
  ];

  listNameOffenses = [
    { id: 1, name: 'Access' },
    { id: 2, name: 'Application' },
    { id: 3, name: 'Authentication' },
    { id: 4, name: 'Dos' },
    { id: 5, name: 'Exploit' },
    { id: 6, name: 'Malware' },
    { id: 7, name: 'Policy' },
    { id: 8, name: 'PotentialExploit' },
    { id: 9, name: 'Recon' },
    { id: 10, name: 'Risk' },
    { id: 11, name: 'SuspiciousActivity' },
    { id: 12, name: 'System' },
  ];

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
  onSearchClear(): any {
    this.searchkey = "";
    this.applyFilter();
    this.getAllReport();
  }
}

