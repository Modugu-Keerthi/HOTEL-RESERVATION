import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  refernceForForm:any;
  constructor(private fb:FormBuilder,private route:Router) { }
  ngOnInit(): void {
    console.log(this.fb);
    this.loginForm=this.fb.group({
      Username:["user@456",[Validators.required,Validators.email]],
      password:["user",[Validators.required]]
    });
  }
  onFormSubmit(){
  this.route.navigate(['get']);
}

}
