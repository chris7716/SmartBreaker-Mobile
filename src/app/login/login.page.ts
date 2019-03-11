import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from './auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  auth: Auth;
  loginForm: FormGroup;
  constructor(private authService: AuthenticationService,
    private formBuilder: FormBuilder, private router: Router) { 

      this.loginForm = this.formBuilder.group({
        'username': [null, Validators.required],
        'password': [null, Validators.required]
      });

    }

  ngOnInit() {
  }

  login() {
    this.auth.username = this.loginForm.controls['username'].value;
    this.auth.password = this.loginForm.controls['password'].value;
    this.authService.login(this.auth);
  }

}