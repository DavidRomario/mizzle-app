import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmNumberPageRoutingModule } from './confirm-number-routing.module';
import { ConfirmNumberPage } from './confirm-number.page';

@NgModule({
  imports: [
    SharedModule,
    ConfirmNumberPageRoutingModule
  ],
  declarations: [ConfirmNumberPage]
})
export class ConfirmNumberPageModule {}
