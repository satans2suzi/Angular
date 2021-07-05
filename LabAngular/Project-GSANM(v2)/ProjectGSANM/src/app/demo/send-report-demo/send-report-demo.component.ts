import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";
import {NameDomain} from "../../../model/report.model";
import {ReportModel} from "../../../model/model-demo/demo.model";
import {ApiDemoService} from "../../../services/service-demo/api-demo.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

// Demo-Table-Material
export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

// End-Demo


@Component({
  selector: 'app-send-report-demo',
  templateUrl: './send-report-demo.component.html',
  styleUrls: ['./send-report-demo.component.css']
})
export class SendReportDemoComponent implements OnInit {
  reportData !: any;
  // Demo-Table
  // displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  // displayedColumns: string[] = ['Thời gian', 'Mạng Giám Sát', 'Loại Cảnh Báo', 'Địa Chỉ Nguồn', 'Địa Chỉ Đích', 'Nội Dung', 'Hành Động'];
  // dataSource: MatTableDataSource<UserData>;
  // dataSource: MatTableDataSource<ReportModel>;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  // End Demo

  reportModelObj: ReportModel = new ReportModel();

  formReport;
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


  constructor(private fb: FormBuilder, private api: ApiDemoService) {
    // Demo-Table
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource1 = new MatTableDataSource(users);

    // End Demo-Table
  }

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
  // Demo-Table
  // ngAfterViewInit(): any {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  // applyFilter(event: Event): any {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  // End-Demo

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
          const ref = document.getElementById('cancel');
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
        this.reportData = res;
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
        const ref = document.getElementById('cancel');
        ref?.click();
        this.formReport.reset();
        this.getAllReport();
      });
  }
}
// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
//
//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
//   };
// }
