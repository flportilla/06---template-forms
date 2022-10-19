import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.namepattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.notKrauxser]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.confirmPassword('password', 'password2')]
  })

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'fl portilla',
      email: 'test1@test.com',
      username: 'krauxs',
    })
  }

  isValidField(field: string) {
    return this.myForm.get(field)?.invalid
      && this.myForm.get(field)?.touched
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched()
  }

}
