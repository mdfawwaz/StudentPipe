import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dob: Date): number {
    const today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monDiff = today.getMonth() - birthDate.getMonth();

    if(monDiff < 0 || (monDiff === 0 && today.getDate()<birthDate.getDate())) {
      age--;
    } 
    return age;
  }
}
