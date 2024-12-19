import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-confirmed-registration',
  templateUrl: './confirmed-registration.page.html',
  styleUrls: ['./confirmed-registration.page.scss'],
})
export class ConfirmedRegistrationPage implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}

  navigateToRegisterPet() {
    this.router.navigate(['/register-pet']); 
  }
}
