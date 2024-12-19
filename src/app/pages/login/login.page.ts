import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  private createrUser(): void {}

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      countryCode: ['+', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  comeBack() {
    this.navCtrl.back();
  }

  ngOnInit(): void {
    this.createrUser();
    this.clearLocalStorage();
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }


  onCountryCodeKeyPress(event: KeyboardEvent) {
    this.allowOnlyNumbersAndNavigation(event);
  }

  onPhoneNumberKeyPress(event: KeyboardEvent) {
    this.allowOnlyNumbersAndNavigation(event);
  }

async onSubmit() {
  if (this.loginForm.valid) {
    const telefone = this.loginForm.get("phoneNumber")?.value;
    const code = this.loginForm.get("countryCode")?.value;

    console.log(telefone, "<");
    
    localStorage.setItem("telephone", telefone)
    localStorage.setItem("code", code)


  await this.loginService.login(this.loginForm.value).subscribe((response: any) => {
      // salvar valor local storage
      // Aqui você pode lidar com a resposta da API, como navegar para a próxima página
      this.navCtrl.navigateForward('/confirm-number');
    });
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
