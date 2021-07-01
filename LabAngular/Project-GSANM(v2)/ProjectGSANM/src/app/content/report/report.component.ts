import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {NameDomain} from '../../../model/report.model';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  listDomain: NameDomain[] = [
              {id: 1, nameDomain: 'Tạp chí An Toàn Thông Tin'},
              {id: 2, nameDomain: "Ban Cơ Yếu"},
              {id: 3, nameDomain: "Bộ Khoa học Công nghệ"},
              {id: 4, nameDomain: "Bắc Ninh"},
              {id: 5, nameDomain: "Bộ Ngoại Giao"},
              {id: 6, nameDomain: "Bộ Tư Pháp"},
              {id: 7, nameDomain: "Chứng thực số và Bảo mật thông tin"},
              {id: 8, nameDomain: "Cơ Yếu Bộ Ngoại giao"},
              {id: 9, nameDomain: "Đà Nẵng"},
              {id: 10, nameDomain: "Hà Nội"},
              {id: 11, nameDomain: "Hồ Chí Minh"},
              {id: 12, nameDomain: "Phòng Giám sát An ninh mạng"},
              {id: 13, nameDomain: "Quảng Nam"},
              {id: 14, nameDomain: "Thái Bình"},
              {id: 15, nameDomain: "Văn phòng Chính phủ"},
              {id: 16, nameDomain: "Văn phòng Quốc hội"}
  ];
  formReport = new FormGroup({
    date: new FormControl(),
    domainName: new FormGroup({
      TCATTT: new FormControl(),
      BCY: new FormControl(),
      BKHCN: new FormControl(),
      BACNINH: new FormControl(),
      BNG: new FormControl(),
      BTP: new FormControl(),
      CA: new FormControl()
    }),
    offenseName: new FormGroup({
       access: new FormControl(),
       application: new FormControl(),
       authentication: new FormControl(),
       dos: new FormControl(),
       Exploit: new FormControl(),
       Malware: new FormControl(),
       policy: new FormControl(),
       potentialExploit: new FormControl(),
       recon: new FormControl(),
       risk: new FormControl(),
       suspiciousActivity: new FormControl(),
       system: new FormControl()
    })
  });
  fromReport1;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.fromReport1 = this.formBuilder.group({
      date: this.formBuilder.control([]),
      domainName: this.formBuilder.array([this.formBuilder.control('')]),
      offenseName: this.formBuilder.group({
        access: this.formBuilder.control([]),
        application: this.formBuilder.control([]),
        authentication: this.formBuilder.control([]),
        dos: this.formBuilder.control([]),
        Exploit: this.formBuilder.control([]),
        Malware: this.formBuilder.control([]),
        policy: this.formBuilder.control([]),
        potentialExploit: this.formBuilder.control([]),
        recon: this.formBuilder.control([]),
        risk: this.formBuilder.control([]),
        suspiciousActivity: this.formBuilder.control([]),
        system: this.formBuilder.control([]),
      })
    });
  }
  get getDomainName(): FormArray {
    return this.fromReport1.get('domainName') as FormArray;
  }
}
