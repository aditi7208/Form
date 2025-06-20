import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {Router} from '@angular/router';

function equalValues(controlName1:string, controlName2:string){
  return(control: AbstractControl)=>{
    const val1=control.get(controlName1)?.value;
    const val2=control.get(controlName2)?.value;
    if(val1===val2){
      return null;
    }
    return{passwordsNotEqual: true};
  };

}
@Component({
  selector: 'app-signup',
  standalone:true,
  imports:[ReactiveFormsModule,NgIf,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  // router: any;
  
  // router!: any;
  constructor(private router:Router){

  }
  form=new FormGroup({
    email:new FormControl('',{
      validators: [Validators.email,Validators.required],
    }),
    passwords: new FormGroup({
      password:new FormControl('',{
        validators: [Validators.required,Validators.minLength(6)],
      }),
      confirmPassword:new FormControl('',{
        validators: [Validators.required,Validators.minLength(6)],
      }),
    },
  {
    validators: [equalValues('password','confirmPassword')],
  }),
      firstName: new FormControl('',{validators: [Validators.required]}),
      lastName: new FormControl('',{validators: [Validators.required]}),
      address:new FormGroup({
        street: new FormControl('',{validators: [Validators.required]}),
        number: new FormControl('',{validators: [Validators.required]}),
        postalCode: new FormControl('',{validators: [Validators.required]}),
        city: new FormControl('',{validators: [Validators.required]}),
      }),
      source: new FormArray([
        new FormControl(false),
         new FormControl(false),
          new FormControl(false),
          
      ]),
      role:new FormControl<'student'|'teacher'|'employee'|'founder'|'other'>('student',{validators:[Validators.required]}),
      agree:new FormControl(false,{validators: [Validators.requiredTrue]})
    });
  formSubmitted: boolean | undefined;
  onSubmit(){
    if(this.form.invalid){
      console.log('INVALID FORM');
      return;
    }
    console.log('Form Submitted',this.form.value);
    this.formSubmitted=true;
    alert("Signup Done...!!")

    
      this.router.navigate(['/auth/login']);
  }
  onReset()
  {
    this.form.reset();
  }
}
