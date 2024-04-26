import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/core/services/api.service';
import { RegisterService } from 'src/app/core/services/register.service';



@Component({
  selector: 'app-confirm-number',
  templateUrl: './confirm-number.page.html',
  styleUrls: ['./confirm-number.page.scss'],
})
export class ConfirmNumberPage implements OnInit {
  showErrorMessage: boolean = false;
  countryCode: string = ""
  phoneNumber: string = ""
  teste = '';

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private registerService: RegisterService,) {

    const storedCountryCode = localStorage.getItem('code');
    if (storedCountryCode) {
      this.countryCode = storedCountryCode;
    }
    // Obter o phoneNumber do localStorage
    const storedPhoneNumber = localStorage.getItem('telephone');
    if (storedPhoneNumber) {
      this.phoneNumber = storedPhoneNumber;
    }
  }

  comeBack() {
    this.navCtrl.back();
  }
 
  ngOnInit() {
 
  }

  async onInput(event: any, nextInputIndex: number) {

    const input = event.target;
    const currentValue = input.value;

  // Limpar o valor acumulado se o input foi esvaziado
    if (currentValue === '') {
        this.teste = '';
        return; // Interrompe a execução do método
    }

    this.teste = this.teste + currentValue;
    console.log(this.teste);
    // Validar o código
    if (nextInputIndex === 6) { // Verifica se o código tem 6 caracteres
      const body = {
        countryCode: this.countryCode,
        phoneNumber: this.phoneNumber,
        code: this.teste
      };

      try {
        // Faz a chamada para validar o código
        const response = await this.registerService.validateCode(body).toPromise();

        // Se a validação for bem-sucedida, redireciona para a próxima página
        console.log(response)
        if (response.success) {
          this.navCtrl.navigateForward('/home');
        } else {
          // Exibe uma mensagem de erro
          this.showErrorMessage = true;
        }
      } catch (error) {
        console.error('Erro ao validar código:', error);
        // Exibe uma mensagem de erro genérica
        this.showErrorMessage = true;
      }
    }

    // Mover o foco para o próximo campo
    const nextInput = input.parentElement.querySelector(`input[type=tel]:nth-child(${nextInputIndex + 1})`);
    if (nextInput) {
      nextInput.focus();
    }
  }

  async resendCode() {
    // vem do localstorage
    const body = {
      countryCode: this.countryCode,
      phoneNumber: this.phoneNumber
    }

   await this.registerService.resendCode(body).subscribe(response => {
      console.log("Codigo reenviado com sucesso"); 
    }, error => {
      console.log("error", error);
      
    })
  }

}
