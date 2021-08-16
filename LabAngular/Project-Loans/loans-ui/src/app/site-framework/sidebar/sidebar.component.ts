import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  username = '';
  lastname = '';
  firstname = '';
  menuList = ['Dashboard', 'Giữ liệu cảnh báo', 'Công văn giấy tờ', 'Tài sản', 'Suricata'];
  data: any;
  menuList2 = [
    {
      name: 'Dashboard',
      routeName: 'dashboard'
    },
    {
      name: 'Giữ liệu cảnh báo',
      routeName: 'offenses',
      childMenu: [
        {
          childMenuName: 'Báo cáo ngày',
          routeName: 'day-offenses'
        },
        {
          childMenuName: 'Báo cáo gửi mail',
          routeName: 'send-offenses'
        },
        {
          childMenuName: 'Tìm kiếm',
          routeName: 'search-offenses'
        }]
    },
    {
      name: 'Công văn giấy tờ',
      routeName: 'documentary'
      // childMenu: [
      //   {
      //     childMenuName: "Công văn, giấy tờ",
      //     routeName: "list-documentary"
      //   },
      //   {
      //     childMenuName: "Tìm kiếm công văn",
      //     routeName: "search-documentary"
      //   }]
    },
    {
      name: 'Tài sản',
      routeName: 'assets-mananger',
      // childMenu: [
      //   {
      //     childMenuName: "Nhập tài sản",
      //     routeName: ""
      //   },
      //   {
      //     childMenuName: "Tìm kiếm tài sản",
      //     routeName: ""
      //   }]
    },
    {
      name: 'Suricata',
      routeName: 'suricata-mananger',
      // childMenu: [
      //   {
      //     childMenuName: "Cảnh báo suricata",
      //     routeName: ""
      //   },
      //   {
      //     childMenuName: "Tìm kiếm cảnh báo",
      //     routeName: ""
      //   }]
    }];
  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {

    console.log('sidebar username', this.username);
  }

}
