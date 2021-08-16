import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  data: any;
  menuList2 = [
    {
      name: "Dashboard",
      routeName: "dashboard"
    },
    {
      name: "Giữ liệu cảnh báo",
      routeName: "offenses",
      childMenu: [
        {
          childMenuName: "Báo cáo ngày",
          routeName: "day-offenses"
        },
        {
          childMenuName: "Báo cáo gửi mail",
          routeName: "send-offenses"
        },
        {
          childMenuName: "Tìm kiếm",
          routeName: "search-offenses"
        }]
    },
    {
      name: "Công văn giấy tờ",
      routeName: "documentary"
    },
    {
      name: "Tài sản",
      routeName: "assets",
    },
    {
      name: "Suricata",
      routeName: "suricata",
    }]

  ngOnInit(): void {
    console.log('sidebar')
  }


}
