import { NgModule } from '@angular/core';
import { ConfirmedRegistrationPageRoutingModule } from './confirmed-registration-routing.module';

import { ConfirmedRegistrationPage } from './confirmed-registration.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ConfirmedRegistrationPageRoutingModule
  ],
  declarations: [ConfirmedRegistrationPage]
})
export class ConfirmedRegistrationPageModule {}
