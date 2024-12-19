import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {
  registerForm!: FormGroup;
  showDatePicker: boolean = false;
  selectedDate: string = '';

  constructor(private fb: FormBuilder, private router: Router) {} 

  ngOnInit() {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  openDatePicker() {
    this.showDatePicker = true;
  }

  closeDatePicker() {
    this.showDatePicker = false;
  }

  onDateSelected(event: any) {
    this.selectedDate = event.detail.value;
    this.registerForm.controls['birthDate'].setValue(this.selectedDate);
    this.closeDatePicker();
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
    } else {
      console.log('Formulário válido:', this.registerForm.value);
      this.router.navigate(['/confirmed-registration']);
    }
  }
}
