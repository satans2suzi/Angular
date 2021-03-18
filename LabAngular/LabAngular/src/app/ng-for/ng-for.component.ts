import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  courses;
  isSelected = true;
  constructor() { }

  ngOnInit(): void {
  }
  loadCourses() {
    this.courses = [
      { id: 1, name: 'course 1' },
      { id: 2, name: 'course 2' },
      { id: 3, name: 'course 3' },
      { id: 4, name: 'course 4' }
    ];
  }
  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
  addCourse() {
    this.courses.push({ id: 5, name: "course5" });
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1)
  }
  onUpdate(course) {
    course.name = "UPDATE"
  }

  canSave = true;
  onClick() {
    this.canSave = !this.canSave
  }
  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  }

}
