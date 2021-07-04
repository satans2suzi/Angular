import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";
import {NameDomain} from "../../../model/report.model";

@Component({
  selector: 'app-content-table-demo',
  templateUrl: './content-table-demo.component.html',
  styleUrls: ['./content-table-demo.component.css']
})
export class ContentTableDemoComponent implements OnInit {
  listDomain: NameDomain[] = [
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
  listNameOffenses = [
        'Access',
        'Application',
        'Authentication',
        'Dos',
        'Exploit',
        'Malware',
        'Policy',
        'PotentialExploit',
        'Recon',
        'Risk',
        'SuspiciousActivity',
        'System',
  ];
  constructor(private fb: FormBuilder) { }
  formReport1;
  formReport2;
  ngOnInit(): void {
    this.formReport1 = this.fb.group({
      date: this.fb.control(''),
      dataReport: this.fb.group({
        domains: this.fb.control(this.listDomain),
        access: this.fb.control(0),
        application: this.fb.control(0),
        authentication: this.fb.control(0),
        dos: this.fb.control(0),
        exploit: this.fb.control(0),
        malware: this.fb.control(0),
        policy: this.fb.control(0),
        potentialExploit: this.fb.control(0),
        recon: this.fb.control(0),
        risk: this.fb.control(0),
        suspiciousActivity: this.fb.control(0),
        system: this.fb.control(0),
      }),
    });
    this.formReport2 = this.fb.group({
      report2: this.fb.array([])
    });
  }
  get report2(): any{
    return this.formReport2.controls.report2 as FormArray;
  }
  addReport2(): any {
    const report2Form = this.fb.group({
      sourceIP: [],
      destinationIP: [],
      content: []
    });
    this.report2.push(report2Form);
  }
}
