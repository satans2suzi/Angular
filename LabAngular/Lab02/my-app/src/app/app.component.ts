import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewChecked,
  AfterViewInit,
  AfterContentInit,
  AfterContentChecked,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit,AfterContentInit, AfterViewChecked, AfterViewChecked, AfterContentChecked {
  title = 'my-app';
  imageSrc = "https://picsum.photos/200";
  withBorder = true;
  textColor = "tomato";

  onTextMouseOver(){
    this.withBorder = false;
  };
  onTextMouseOut(){
    this.withBorder = true;
  };

  onButtonClick(event: MouseEvent){
    // alert("Border Changed!");
    this.withBorder = !this.withBorder;
    this.title = "Changed";
  };
  ngOnInit(): void{
    console.log('Parent OnInit ran');
  };
  ngOnChanges(changes: SimpleChanges): void{
    console.log('Parent OnInit ran', {changes});
  };
  ngOnDestroy(): void{
    console.log('Parent OnDestroy ran');
  };
  ngAfterViewInit(): void{
    console.log('Parent AfterViewInit ran');
  };
  ngAfterContentInit(): void{
    console.log('Parent AfterContentInit ran');
  };
  ngAfterViewChecked(): void{
    console.log('Parent AfterViewChecked ran');
  };
  ngAfterContentChecked(): void{
    console.log('Parent AfterContentChecked ran');
  };
}
