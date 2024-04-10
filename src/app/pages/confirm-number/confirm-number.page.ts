import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-number',
  templateUrl: './confirm-number.page.html',
  styleUrls: ['./confirm-number.page.scss'],
})
export class ConfirmNumberPage implements OnInit {

   constructor(private navCtrl: NavController) { }

  comeBack() {
  this.navCtrl.back();

}

  ngOnInit() {
  }

}
