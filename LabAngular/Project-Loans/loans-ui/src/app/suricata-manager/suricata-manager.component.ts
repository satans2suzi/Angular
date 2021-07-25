import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suricata-manager',
  templateUrl: './suricata-manager.component.html',
  styleUrls: ['./suricata-manager.component.css']
})
export class SuricataManagerComponent implements OnInit {
  title = "Suricata"
  constructor() { }

  ngOnInit(): void {
  }

}
