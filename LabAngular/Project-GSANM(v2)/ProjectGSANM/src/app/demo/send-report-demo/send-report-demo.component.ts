import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";
import {NameDomain} from "../../../model/report.model";
import {ReportModel} from "../../../model/model-demo/demo.model";
import {ApiDemoService} from "../../../services/service-demo/api-demo.service";
import {error} from "@angular/compiler-cli/src/transformers/util";


@Component({
  selector: 'app-send-report-demo',
  templateUrl: './send-report-demo.component.html',
  styleUrls: ['./send-report-demo.component.css']
})
export class SendReportDemoComponent implements OnInit {
  reportModelObj: ReportModel = new ReportModel();
  reoortData !: any;
  formReport;

  constructor(private fb: FormBuilder, private api: ApiDemoService) {
  }


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


  ngOnInit(): void {
    this.formReport = this.fb.group({
      date: [],
      domainName: [],
      sourceIP: [],
      destinationIP: [],
      typeOffense: [],
      content: [],
      note: [],
      status: this.fb.group({
        offenseNew: [false],
        offenseOld: [false]
      })
    });
    this.getAllReport();
  }

  postReportDetails(): any {
    this.reportModelObj.date = this.formReport.value.date;
    this.reportModelObj.domainName = this.formReport.value.domainName;
    this.reportModelObj.sourceIP = this.formReport.value.sourceIP;
    this.reportModelObj.destinationIP = this.formReport.value.destinationIP;
    this.reportModelObj.typeOffense = this.formReport.value.typeOffense;
    this.reportModelObj.content = this.formReport.value.content;
    this.reportModelObj.note = this.formReport.value.note;
    this.reportModelObj.offenseNew = this.formReport.value.offenseNew;
    this.reportModelObj.offenseOld = this.formReport.value.offenseOld;

    this.api.postReport(this.reportModelObj)
      .subscribe(res => {
          console.log(res);
          alert("Report added");
          let ref = document.getElementById('cancel');
          ref?.click();
          this.formReport.reset();
          this.getAllReport();
        },
        err => {
          alert("Something Wrong");
        }
      );
  }

  getAllReport(): any {
    this.api.getReport()
      .subscribe(res => {
        this.reoortData = res;
      });
  }

  deleteReport(row: any): any {
    this.api.deleteReport(row.id)
      .subscribe(res => {
        alert("deleted");
        this.getAllReport();
      });
  }

  onEdit(row: any): any {
    this.reportModelObj.id = row.id;
    this.formReport.controls.date.setValue(row.date);
    this.formReport.controls.domainName.setValue(row.domainName);
    this.formReport.controls.sourceIP.setValue(row.sourceIP);
    this.formReport.controls.destinationIP.setValue(row.destinationIP);
    this.formReport.controls.typeOffense.setValue(row.typeOffense);
    this.formReport.controls.content.setValue(row.content);
    this.formReport.controls.note.setValue(row.note);
    this.formReport.controls.offenseNew.setValue(row.offenseNew);
    this.formReport.controls.offenseOld.setValue(row.offenseOld);
  }

  // get report2(): any {
  //   return this.formReport2.controls.report2 as FormArray;
  // }
  //
  // addReport2(): any {
  //   const report2Form = this.fb.group({
  //     donvi: [],
  //     sourceIP: [],
  //     destinationIP: [],
  //     content: []
  //   });
  //   this.report2.push(report2Form);
  // }
  //
  // deleteReport2(i: number): any {
  //   this.report2.removeAt(i);
  // }
  updateReport(): any {
    this.reportModelObj.date = this.formReport.value.date;
    this.reportModelObj.domainName = this.formReport.value.domainName;
    this.reportModelObj.sourceIP = this.formReport.value.sourceIP;
    this.reportModelObj.destinationIP = this.formReport.value.destinationIP;
    this.reportModelObj.typeOffense = this.formReport.value.typeOffense;
    this.reportModelObj.content = this.formReport.value.content;
    this.reportModelObj.note = this.formReport.value.note;
    this.reportModelObj.offenseNew = this.formReport.value.offenseNew;
    this.reportModelObj.offenseOld = this.formReport.value.offenseOld;
    this.api.updateReport(this.reportModelObj, this.reportModelObj.id)
      .subscribe(res => {
        alert("Updated");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formReport.reset();
        this.getAllReport();
      });
  }
}
