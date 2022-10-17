import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  myForm: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    favorites: this.fb.array([
      ['Metal gear', Validators.required],
      ['Chrono cross'],
    ], Validators.required,
    )
  })

  newFav: FormControl = this.fb.control('', Validators.required)

  constructor(private fb: FormBuilder) { }

  isValidField(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

  save() {

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }
    console.log(this.myForm.get('favorites') as FormArray);
  }

  addGame() {
    if (this.newFav.invalid) return
    // this.favs.push( new FormControl(this.newFav.value, Validators.required) )
    this.favs.push( this.fb.control(this.newFav.value, Validators.required) )
    this.newFav.reset()
  }

  removeGame(index: number){
    
    this.favs.removeAt(index);
    
  }

  get favs() {
    return this.myForm.get('favorites') as FormArray
  }

}
