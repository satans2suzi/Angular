import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Observable, of} from 'rxjs';
import {MenuModel} from '../../../shared/models/menu/menu.models';
import {shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuList$!: Observable<MenuModel[]>;
  fullName!: string;

  constructor(private authService: AuthService) {
  }


  ngOnInit(): void {
    this.menuList$ = of<MenuModel[]>([
      {
        name: 'Dashboard',
        router_name: 'dashboard',
      },
      {
        name: 'Giữ liệu cảnh báo',
        router_name: 'offenses',
        child_menu: [
          {
            child_menu_name: 'Báo cáo ngày',
            child_router_name: 'day-offenses'
          },
          {
            child_menu_name: 'Báo cáo gửi mail',
            child_router_name: 'send-offenses'
          },
          {
            child_menu_name: 'Tìm kiếm',
            child_router_name: 'search-offenses'
          }]
      },
      {
        name: 'Công văn giấy tờ',
        router_name: 'documentary'
      },
      {
        name: 'Tài sản',
        router_name: 'assets',
      },
      {
        name: 'Suricata',
        router_name: 'suricata',
      }
    ]).pipe(shareReplay(1));
    this.checkFullname();
  }

  checkFullname(){
    this.authService.currentFullname()
      .subscribe(value => this.fullName= value);
  }



}
