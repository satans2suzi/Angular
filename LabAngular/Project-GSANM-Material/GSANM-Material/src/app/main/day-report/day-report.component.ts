import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiJsonService} from "../../services/api-json.service";

@Component({
  selector: 'app-day-report',
  templateUrl: './day-report.component.html',
  styleUrls: ['./day-report.component.css']
})
export class DayReportComponent implements OnInit {
  listNameOffenses = [
    { id: 1, name: 'Access'},
    { id: 2, name: 'Application'},
    { id: 3, name: 'Authentication'},
    { id: 4, name: 'Dos'},
    { id: 5, name: 'Exploit'},
    { id: 6, name: 'Malware'},
    { id: 7, name: 'Policy'},
    { id: 8, name: 'PotentialExploit'},
    { id: 9, name: 'Recon'},
    { id: 10, name: 'Risk'},
    { id: 11, name: 'SuspiciousActivity'},
    { id: 12, name: 'System'},
  ];

  listDomain = [
    {id: 1, nameDomain: 'Tạp chí An Toàn Thông Tin', status: false},
    {id: 2, nameDomain: "Ban Cơ Yếu", status: false},
    {id: 3, nameDomain: "Bộ Khoa học Công nghệ", status: false},
    {id: 4, nameDomain: "Bắc Ninh", status: false},
    {id: 5, nameDomain: "Bộ Ngoại Giao", status: false},
    {id: 6, nameDomain: "Bộ Tư Pháp", status: false},
    {id: 7, nameDomain: "Chứng thực số và Bảo mật thông tin", status: false},
    {id: 8, nameDomain: "Cơ Yếu Bộ Ngoại giao", status: false},
    {id: 9, nameDomain: "Đà Nẵng", status: false},
    {id: 10, nameDomain: "Hà Nội", status: false},
    {id: 11, nameDomain: "Hồ Chí Minh", status: false},
    {id: 12, nameDomain: "Phòng Giám sát An ninh mạng", status: false},
    {id: 13, nameDomain: "Quảng Nam", status: false},
    {id: 14, nameDomain: "Thái Bình", status: false},
    {id: 15, nameDomain: "Văn phòng Chính phủ", status: false},
    {id: 16, nameDomain: "Văn phòng Quốc hội", status: false}
  ];
  dataDayReport: any;
  constructor(private api: ApiJsonService) { }

  ngOnInit(): void {
    this.getAlldataDayReport()
  }

  getAlldataDayReport(){
    this.api.getReport()
      .subscribe((res: any) => {
        this.dataDayReport = res;
        console.log(this.dataDayReport)
      })
  }

}
