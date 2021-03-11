import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  registrationForm=this.fb.group({
    userName: ['Vijay'],
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
