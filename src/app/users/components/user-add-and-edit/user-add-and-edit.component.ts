import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Address, UserCredentials, User } from '../../models/user';
import { UserServiceService } from '../../services/user-service.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-user-add-and-edit',
  templateUrl: './user-add-and-edit.component.html',
  styleUrls: ['./user-add-and-edit.component.css']
})
export class UserAddAndEditComponent implements OnInit {
  createAccountForm:FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private userservice:UserServiceService,
    private router:Router) { 

  }

  ngOnInit(): void {
      const addressForm = this.formBuilder.group({
        unitnumber : '',
        streetaddress : '',
        city : '',
        state : ''
      });
      this.createAccountForm = this.formBuilder.group({
        firstname : '',
        lastname : '',
        emailaddress : '',
        phonenumber : null,
        address : addressForm,
        username : '',
        password : ''
      });
  }


  save() : void {
    console.log( 'this.createAccountForm.value : ');  
    console.log( this.createAccountForm.value);  

    let un = this.createAccountForm.get("username")?.value;
    let ps = this.createAccountForm.get("password")?.value;
    let em = this.createAccountForm.get("emailaddress")?.value;
    let userCred = new UserCredentials(em, un, ps);

    let unit = this.createAccountForm.get("unitnumber")?.value;
    let street = this.createAccountForm.get("streetaddress")?.value;
    let city = this.createAccountForm.get("city")?.value;
    let state = this.createAccountForm.get("state")?.value;
    let address = new Address(unit, street, city, state);

    let fn = this.createAccountForm.get("firstname")?.value;
    let ln = this.createAccountForm.get("lastname")?.value;
    let pn = this.createAccountForm.get("phonenumber")?.value;
    let user = new User(fn, ln, pn, address, userCred);
    console.log('user -> ');  
    console.log( user);  

    let id = this.userservice.addUser(user);
    console.log( 'user with id : ' + id + ' add.');  

    this.router.navigateByUrl('users/user-profile/' + id);
  }

}
