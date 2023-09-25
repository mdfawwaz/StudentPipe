import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students = [
    {
      Sid: 1,
      Sname: 'Mohammed Fawwazuddin',
      dob: new Date('2001-10-31'), // Date of Birth in 'YYYY-MM-DD' format
      course: 'Information Technology',
      fees: 5000
    },
    {
      Sid: 2,
      Sname: 'Ahmed Raoofuddin',
      dob: new Date('2001-07-29'),
      course: 'Computer Science',
      fees: 5000
    },
    {
      Sid: 3,
      Sname: 'Mir Murtuza',
      dob: new Date('2001-02-27'),
      course: 'Computer Science',
      fees: 2000
    },
    {
      Sid: 4,
      Sname: 'Mohammed Omar',
      dob: new Date('10-04-2002'),
      course: 'Mechanical',
      fees: 4000
    }
  ];
}

