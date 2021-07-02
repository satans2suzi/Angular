import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {NameDomain} from '../../../model/report.model';
import {map} from "rxjs/operators";
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
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
  formReport1;
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formReport1 = this.formBuilder.group({
      date: this.formBuilder.control(''),
      dataReport: this.formBuilder.group({
        domains: this.formBuilder.control(this.listDomain),
        access: this.formBuilder.control(0),
        application: this.formBuilder.control(0),
        authentication: this.formBuilder.control(0),
        dos: this.formBuilder.control(0),
        Exploit: this.formBuilder.control(0),
        Malware: this.formBuilder.control(0),
        policy: this.formBuilder.control(0),
        potentialExploit: this.formBuilder.control(0),
        recon: this.formBuilder.control(0),
        risk: this.formBuilder.control(0),
        suspiciousActivity: this.formBuilder.control(0),
        system: this.formBuilder.control(0),
      }),
      // domainName: this.formBuilder.group({
      //   TCATTT: this.formBuilder.control(false),
      //   BCY: this.formBuilder.control(false),
      //   BKHCN: this.formBuilder.control(false),
      //   BACNINH: this.formBuilder.control(false),
      //   BNG: this.formBuilder.control(false),
      //   BTP: this.formBuilder.control(false),
      //   CA: this.formBuilder.control(false),
      //   CYBNG: this.formBuilder.control(false),
      //   DANANG: this.formBuilder.control(false),
      //   HANOI: this.formBuilder.control(false),
      //   HCM: this.formBuilder.control(false),
      //   GSANM: this.formBuilder.control(false),
      //   QUANGNAM: this.formBuilder.control(false),
      //   THAIBINH: this.formBuilder.control(false),
      //   VPCP: this.formBuilder.control(false),
      //   VPQH: this.formBuilder.control(false)
      // }),
      // offenseName: this.formBuilder.group({
      //   access: this.formBuilder.control(0),
      //   application: this.formBuilder.control(0),
      //   authentication: this.formBuilder.control(0),
      //   dos: this.formBuilder.control(0),
      //   Exploit: this.formBuilder.control(0),
      //   Malware: this.formBuilder.control(0),
      //   policy: this.formBuilder.control(0),
      //   potentialExploit: this.formBuilder.control(0),
      //   recon: this.formBuilder.control(0),
      //   risk: this.formBuilder.control(0),
      //   suspiciousActivity: this.formBuilder.control(0),
      //   system: this.formBuilder.control(0),
      // })
    });
  }
  get getDate(): any{
    return this.formReport1.get('date');
  }
  onCheckboxChange(e): any {
    const checkArray: FormArray = this.formReport1.get('domainName') as FormArray;

    if(e.target.checked){
      checkArray.push(new FormControl(e.target.value));
    }
  }
}
