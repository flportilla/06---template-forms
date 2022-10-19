import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {

    const email = control.value;
    console.log('email', email)
    return this.http.get<any[]>(`http://localhost:3000/users?q=${email}`)
      .pipe(
        map(res => (res.length) === 0 ? null : { emailInUse: true })
      )
  }

}
