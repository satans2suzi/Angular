import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {ApiJsonService} from '../../services/api-json.service'
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FormBuilder, FormGroup} from "@angular/forms";
import {sendReportModel} from "../../model/sendReportForm.model";

@Component({
  selector: 'app-send-report',
  templateUrl: './send-report.component.html',
  styleUrls: ['./send-report.component.css']
})
export class SendReportComponent implements OnInit {
  listNameOffenses = [
    {id: 1, nameOffense: 'Access'},
    {id: 2, nameOffense: 'Application'},
    {id: 3, nameOffense: 'Authentication'},
    {id: 4, nameOffense: 'Dos'},
    {id: 5, nameOffense: 'Exploit'},
    {id: 6, nameOffense: 'Malware'},
    {id: 7, nameOffense: 'Policy'},
    {id: 8, nameOffense: 'PotentialExploit'},
    {id: 9, nameOffense: 'Recon'},
    {id: 10, nameOffense: 'Risk'},
    {id: 11, nameOffense: 'SuspiciousActivity'},
    {id: 12, nameOffense: 'System'},
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
  dataSendReportObj: sendReportModel = new sendReportModel();
  formSendReport !: FormGroup;
  dataSendReport !: any;

  constructor(private api: ApiJsonService,
              private fb: FormBuilder) {
    this.formSendReport = this.fb.group({
      date: [''],
      domainName: [''],
      sourceIP: [''],
      destinationIP: [''],
      typeOffense: [''],
      content: [''],
      note: [''],
      oldReport: [false],
      newReport: [true]
    })
  }

  ngOnInit(): void {
    this.getAllDataSendReport()
  }

  postDataSendReportObj() {
    this.dataSendReportObj.date = this.formSendReport.value.date;
    this.dataSendReportObj.domainName = this.formSendReport.value.domainName;
    this.dataSendReportObj.sourceIP = this.formSendReport.value.sourceIP;
    this.dataSendReportObj.destinationIP = this.formSendReport.value.destinationIP;
    this.dataSendReportObj.typeOffense = this.formSendReport.value.typeOffense;
    this.dataSendReportObj.content = this.formSendReport.value.content;
    this.dataSendReportObj.note = this.formSendReport.value.note;
    this.dataSendReportObj.oldReport = this.formSendReport.value.oldReport;
    this.dataSendReportObj.newReport = this.formSendReport.value.newReport;

    this.api.postReport(this.dataSendReportObj)
      .subscribe((res: any) => {
        this.formSendReport.reset();
        this.getAllDataSendReport();
      })
  }

  // ngAfterViewInit(): any {
  // this.dataSource.paginator = this.paginator;
  // }

  applyFilter(): any {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = this.searchkey.trim().toLowerCase();
    //
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  getAllDataSendReport(): any {
    this.api.getReport()
      .subscribe((res: any) => {
        this.dataSendReport = res;
        console.log(this.dataSendReport);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      });
  }

  deleteDataSendReport(row: any) {
    this.api.deleteReport(row.id)
      .subscribe((res: any) => {
        alert('deleted')
        this.getAllDataSendReport()
      })
  }

  onEdit(row:any){
    this.dataSendReportObj.id = row.id
    this.formSendReport.controls['date'].setValue(row.date);
    this.formSendReport.controls['domainName'].setValue(row.domainName);
    this.formSendReport.controls['sourceIP'].setValue(row.sourceIP);
    this.formSendReport.controls['destinationIP'].setValue(row.destinationIP);
    this.formSendReport.controls['typeOffense'].setValue(row.typeOffense);
    this.formSendReport.controls['content'].setValue(row.content);
    this.formSendReport.controls['note'].setValue(row.note);
    this.formSendReport.controls['oldReport'].setValue(row.oldReport);
    this.formSendReport.controls['newReport'].setValue(row.newReport);
  }
  updateDataSendReport(){
    this.dataSendReportObj.date = this.formSendReport.value.date;
    this.dataSendReportObj.domainName = this.formSendReport.value.domainName;
    this.dataSendReportObj.sourceIP = this.formSendReport.value.sourceIP;
    this.dataSendReportObj.destinationIP = this.formSendReport.value.destinationIP;
    this.dataSendReportObj.typeOffense = this.formSendReport.value.typeOffense;
    this.dataSendReportObj.content = this.formSendReport.value.content;
    this.dataSendReportObj.note = this.formSendReport.value.note;
    this.dataSendReportObj.oldReport = this.formSendReport.value.oldReport;
    this.dataSendReportObj.newReport = this.formSendReport.value.newReport;
    this.api.updateReport(this.dataSendReportObj,this.dataSendReportObj.id)
      .subscribe((res: any) =>{
        alert("updated");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formSendReport.reset();
        this.getAllDataSendReport();
      })
  }
}
