import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit{

  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('rtx 1050'),
  //   price: new FormControl(100),
  //   stock: new FormControl(5),
  // })

  myForm: FormGroup = this.fb.group({
    name: [, [
      Validators.required,
      Validators.minLength(3)]
    ], //[value, sync validators, async validators]

    price: [, [
      Validators.required,
      Validators.min(0)]
    ],

    stock: [, [
      Validators.required,
      Validators.min(0)]
    ],
  })

  constructor(private fb: FormBuilder) { }

  //Only if initial values are required
  ngOnInit(): void {
    this.myForm.reset({
      name: 'something',
      price: '100',
      stock: '12',
    })
  }

  isValidField(field: string) {

    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched

  }

  save() {

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }

    console.log(this.myForm.value);
    this.myForm.reset()
  }

}
