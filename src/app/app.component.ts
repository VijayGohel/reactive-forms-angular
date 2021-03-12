import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder){}
  // registrationForm= new FormGroup({
  //   userName: new FormControl('Vijay'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup(
  //     {
  //       city: new FormControl(''),
  //       state: new FormControl(''),
  //       postalCode: new FormControl('')
  //     }
  //   )
  // });

get userName()
{
  return this.registrationForm.get("userName");
}

  registrationForm=this.fb.group({
    userName: ['',[Validators.required]],
    password: [''],
    confirmPassword: [''],
    address:this.fb.group(
      {
        city: [''],
        state: [''],
        postalCode: ['']
      })
  })

  loadValue()
  {
    this.registrationForm.patchValue({
      username: 'Vishal',
      password: 'test',
      confirmPassword: 'test'
    }
    );
  }
}
