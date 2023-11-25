import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from './User';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
   Formvalue ! :FormGroup;
   userModelObj : UserModel = new UserModel();

  constructor(private formb : FormBuilder, public rtr : Router , private api : ApiService) { }

  ngOnInit(): void {
    this.Formvalue = this.formb.group(
      {
        name : [''],
        storename : [''],
        email : [''],
        mobile : [''],
        password : [''],
      }
    )
  }
  submit1(){
    this.rtr.navigate(["login"]);
  }  

  postEmployeeDetails() {
    this.userModelObj.Name = this.Formvalue.value.name;
    this.userModelObj.storeName = this.Formvalue.value.storename;
    this.userModelObj.email = this.Formvalue.value.email;
    this.userModelObj.mobile = this.Formvalue.value.mobile;
    this.userModelObj.password = this.Formvalue.value.password;

if(this.userModelObj.Name != '' && this.userModelObj.storeName !='' && this.userModelObj.email != '' && this.userModelObj.mobile != '', this.userModelObj.password != ''){
    this.api.postEmployee(this.userModelObj).subscribe(data1 => {

      alert('successfully created');
      this.rtr.navigate(['login']);
      this.Formvalue.reset();
    },
    (error) => {
      console.error('Error in postEmployee:', error);
    });
  }else{
    alert('Please fill the deatils');
  }
}

}
