import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from './auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  constructor(private authService: AuthenticationService,
    private formBuilder: FormBuilder, private router: Router, public alertController: AlertController) { 

      this.loginForm = this.formBuilder.group({
        'username': [null, Validators.required],
        'password': [null, Validators.required]
      });

    }

  ngOnInit() {
  }

  login() {
    const auth: Auth = Object.assign({}, this.loginForm.value);
    this.authService.login(auth);

    if(!this.authService.isAuthenticated()){
      this.presentAlert();
    }

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Failed',
      message: 'Invalid Credentials',
      buttons: ['OK']
    });

    await alert.present();
  }


}