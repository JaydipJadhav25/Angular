import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form2',
  imports: [ReactiveFormsModule],
  templateUrl: './form2.html',
  styleUrl: './form2.css',
})
export class Form2 {
  usersignal = signal({name : "" , email : ""});
  form : any; //define for type 

  //to define initail level of form
  constructor(private fb: FormBuilder){
    this.form =  this.fb.group({
      name : [''],
      email : ['']
    });
  


    this.form.valueChanges.subscribe((value : any)=>{
       this.usersignal.set(value)
    });


  }

  submiteForm(){
      alert(`Name : ${this.usersignal().name} || Email : ${this.usersignal().email}`);
  }


}
