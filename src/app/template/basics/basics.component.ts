import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm

  initialValue = {
    product:'',
    price: 0,
    stock: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    // console.log(this.myForm); 
    this.myForm.resetForm({
      price: 0,
      stock: 0
    });
  }

  validName(): boolean{
    return this.myForm?.controls['product']?.invalid &&
          this.myForm?.controls['product']?.touched
  }

  validPrice(): boolean{
    return this.myForm?.controls['price']?.invalid &&
          this.myForm?.controls['price']?.touched
  }

}
