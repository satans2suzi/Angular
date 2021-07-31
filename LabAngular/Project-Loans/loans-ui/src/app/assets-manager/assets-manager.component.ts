import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-assets-manager',
  templateUrl: './assets-manager.component.html',
  styleUrls: ['./assets-manager.component.css']
})
export class AssetsManagerComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'Assets';

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChangeWork');
  }

  ngOnInit(): void {
    console.log('ngOnInitWork');
  }

  ngDoCheck(): void {
    console.log('ngDoCheckWork');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInitWork');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentCheckedWork');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInitWork');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewCheckedWork');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroyWork');
  }
}
