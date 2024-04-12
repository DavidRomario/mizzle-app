import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-number',
  templateUrl: './confirm-number.page.html',
  styleUrls: ['./confirm-number.page.scss'],
})
export class ConfirmNumberPage {
  showErrorMessage: boolean = false;
  countryCode: string = ""
  phoneNumber: string = ""

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { }

  comeBack() {
    this.navCtrl.back();
  }
 
  ngOnInit() {
    // Obter os parâmetros countryCode e phoneNumber da rota
    this.route.params.subscribe(params => {
      this.countryCode = params['countryCode'];
      this.phoneNumber = params['phoneNumber'];
    });
  }

  onInput(event: any, nextInputIndex: number) {
    const input = event.target;
    const maxLength = parseInt(input.getAttribute('maxlength'), 10);
    let currentValue = input.value;

    // Remove caracteres não numéricos
    currentValue = currentValue.replace(/\D/g, '');

    // Define o valor atual do campo
    input.value = currentValue;

    // Verifica se o valor atual é válido
    const isValid = currentValue.length === maxLength && currentValue !== '0'; // Verifica se o valor não é "0"

    // Adiciona ou remove a classe de erro
    if (isValid) {
      input.classList.remove('error');
      this.showErrorMessage = false;
    } else {
      input.classList.add('error');
      this.showErrorMessage = true;
    }

    // Se o campo está cheio e o valor não é "0", mover o foco para o próximo campo
    if (isValid) {
      const nextInput = input.parentElement.querySelector(`input[type=tel]:nth-child(${nextInputIndex + 1})`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
}
