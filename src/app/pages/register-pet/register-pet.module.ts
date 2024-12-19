import { NgModule } from '@angular/core';
import { RegisterPetPageRoutingModule } from './register-pet-routing.module';
import { RegisterPetPage } from './register-pet.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RegisterPetPageRoutingModule
  ],
  declarations: [RegisterPetPage]
})
export class RegisterPetPageModule {}
