import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

   registerForm: FormGroup;

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      countryCode: ['+', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  comeBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
  }

  onCountryCodeKeyPress(event: KeyboardEvent) {
    const keyCode = event.keyCode;
    // Permitir apenas números e teclas de navegação
    if (!(keyCode >= 48 && keyCode <= 57) && keyCode !== 8 && keyCode !== 9 && keyCode !== 46 && keyCode !== 37 && keyCode !== 39) {
      event.preventDefault();
    }
  }

  onPhoneNumberKeyPress(event: KeyboardEvent) {
    const keyCode = event.keyCode;
    // Permitir apenas números e teclas de navegação
    if (!(keyCode >= 48 && keyCode <= 57) && keyCode !== 8 && keyCode !== 9 && keyCode !== 46 && keyCode !== 37 && keyCode !== 39) {
      event.preventDefault();
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Enviar o formulário
    }
  }
}