import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
// import { ApiService } from 'src/app/core/services/api.service';
import { RegisterService } from 'src/app/core/services/register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registerForm: FormGroup;

  private createrUser(): void {}

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder, private registerService: RegisterService) {
    this.registerForm = this.formBuilder.group({
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
  if (this.registerForm.valid) {
    const telefone = this.registerForm.get("telefone")?.value;
    console.log(telefone, "<");
    
    localStorage.setItem("telephone", telefone)

  await this.registerService.register(this.registerForm.value).subscribe(response => {
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
