import {Component, OnDestroy} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public course: Observable<any>[];
  // title = 'Firebase-Demo';
  // public itemCourse: AngularFireList<any>;
  // Test 2
  courses$;
  course$;
  // courses: any[];
  // subscription: Subscription;
  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/Courses').valueChanges();
    this.course$ = db.object('/Courses/1').valueChanges();
    // console.log(this.courses$);
    // this.subscription = db.list('/Courses')
    //  .valueChanges()
    //     .subscribe(res => {
    //       this.courses = res;
    //       console.log(this.courses);
    //     });
    // this.itemCourse = db.list('Courses');
   // this.itemCourse.valueChanges().subscribe(
   //   response => {
   //     this.course = response;
   //     console.log(this.course);
   //   }
   // );
  }
  // ngOnDestroy() {
  //   // this.itemCourse.remove();
  // }

  add(course: HTMLInputElement): any{
    // console.log(course.value);
    this.courses$.push(course.value);
    course.value = '';
  }
}
