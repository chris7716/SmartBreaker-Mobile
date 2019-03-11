import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
    this.authService.login();
  }

}