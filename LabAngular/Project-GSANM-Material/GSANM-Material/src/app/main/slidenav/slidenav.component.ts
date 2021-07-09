import {OnDestroy, ViewChild, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver, MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-slidenav',
  templateUrl: './slidenav.component.html',
  styleUrls: ['./slidenav.component.css']
})
export class SlidenavComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  constructor(private observer: BreakpointObserver) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
          console.log(res);
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
          console.log(res);
        }
      });
    }, 5);

  }

}
