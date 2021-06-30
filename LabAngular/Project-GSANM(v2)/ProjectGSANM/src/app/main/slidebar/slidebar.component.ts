import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {
  srcImg = 'G:/Project/Git/Angular/LabAngular/Project-GSANM(v2)/ProjectGSANM/node_modules/admin-lte/dist/img/user1-128x128.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
