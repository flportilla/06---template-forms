import { FormControl } from "@angular/forms";

  //basic regex to check if the input have two words with at least 1 letter each
  export const namepattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
  //regex to check email
  export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  export const notKrauxser = (control: FormControl) => {
    const value: string = control.value?.trim().toLowerCase()
    
    if(value === 'krauxser') {
      return {
        noKrauxser: false
      }
    }
    
    return null
  }