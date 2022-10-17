import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    gender: ['m', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue]
  })

  person = {
    gender: 'f',
    notifications: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
      terms: false
    })
  }

  save() {
    const formValue = { ...this.myForm.value };
    delete formValue.terms

    console.log(formValue);

  }
}
