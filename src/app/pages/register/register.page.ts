import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  ngOnInit() {}

  onCountryCodeKeyPress(event: KeyboardEvent) {
    this.allowOnlyNumbersAndNavigation(event);
  }

  onPhoneNumberKeyPress(event: KeyboardEvent) {
    this.allowOnlyNumbersAndNavigation(event);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Aqui você pode navegar para a página confirm-number
      this.navCtrl.navigateForward('/confirm-number');
    }
  }

  private allowOnlyNumbersAndNavigation(event: KeyboardEvent) {
    const keyCode = event.keyCode;
    // Permitir apenas números e teclas de navegação
    if (!(keyCode >= 48 && keyCode <= 57) && keyCode !== 8 && keyCode !== 9 && keyCode !== 46 && keyCode !== 37 && keyCode !== 39) {
      event.preventDefault();
    }
  }
}
