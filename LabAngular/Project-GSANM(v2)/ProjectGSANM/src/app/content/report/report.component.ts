import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NameDomain} from '../../../model/report.model';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  listDomain: NameDomain[] = [ {id: 1, nameDomain: 'Tạp chí An Toàn Thông Tin'},
    {id: 2, nameDomain: "Ban Cơ Yếu"},
                        "Bộ Khoa học Công nghệ",
                        "Bắc Ninh",
                        "Bộ Ngoại Giao",
                        "Bộ Tư Pháp",
                        "Chứng thực số và Bảo mật thông tin",
                        "Cơ Yếu Bộ Ngoại giao",
                        "Đà Nẵng",
                        "Hà Nội",
                        "Hồ Chí Minh",
                        "Phòng Giám sát An ninh mạng",
                        "Quảng Nam",
                        "Thái Bình",
                        "Văn phòng Chính phủ",
                        "Văn phòng Quốc hội"}];
  formReport = new FormGroup({
    date: new FormControl(),
    domainName: new FormControl(),
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
  constructor() { }

  ngOnInit(): void {
  }

}
