import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

    //basic regex to check if the input have two words with at least 1 letter each
    public namepattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
    //regex to check email
    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }
  
   notKrauxser = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value?.trim().toLowerCase()
    
    if(value === 'krauxser') {
      return {
        noKrauxser: false
      }
    }
    
    return null
  }

  confirmPassword(password: string, password2: string){
    return (formGroup: AbstractControl): ValidationErrors | null =>{
      
      const pass1 = formGroup.get(password)?.value
      const pass2 = formGroup.get(password2)?.value

      if(pass1 !== pass2){
        formGroup.get(password2)?.setErrors({notEqual: true})
        return {
          notEqual: true
        }
      }
      
      formGroup.get(password2)?.setErrors(null)
      
      return null
    } 
  }

}
