import { NgModule } from '@angular/core';
import { RegisterUserPageRoutingModule } from './register-user-routing.module';
import { RegisterUserPage } from './register-user.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RegisterUserPageRoutingModule
  ],
  declarations: [RegisterUserPage]
})
export class RegisterUserPageModule {}
