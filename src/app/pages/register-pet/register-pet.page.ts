import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.page.html',
  styleUrls: ['./register-pet.page.scss'],
})
export class RegisterPetPage implements OnInit {
  selectedImage: string = '';

  constructor() {}

  ngOnInit() {}

  selectImage(imageId: string) {
    this.selectedImage = imageId;
  }
}
