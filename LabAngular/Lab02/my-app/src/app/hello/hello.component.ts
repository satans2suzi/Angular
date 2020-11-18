import { Component, Input, OnInit,OnChanges,
  OnDestroy,
  AfterViewChecked,
  AfterViewInit,
  AfterContentInit,
  AfterContentChecked,
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit,OnChanges, OnDestroy, AfterViewInit,AfterContentInit, AfterViewChecked, AfterViewChecked, AfterContentChecked {
  @Input() text:string;
  constructor() { }

  ngOnInit(): void {
    console.log('OnInit ran');
  }
  ngOnChanges(changes: SimpleChanges): void{
    console.log('OnInit ran', {changes});
  };
  ngOnDestroy(): void{
    console.log('OnDestroy ran');
  };
  ngAfterViewInit(): void{
    console.log('AfterViewInit ran');
  };
  ngAfterContentInit(): void{
    console.log('AfterContentInit ran');
  };
  ngAfterViewChecked(): void{
    console.log('AfterViewChecked ran');
  };
  ngAfterContentChecked(): void{
    console.log('AfterContentChecked ran');
  };

}
