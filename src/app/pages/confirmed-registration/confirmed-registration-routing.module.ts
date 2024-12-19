import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmedRegistrationPage } from './confirmed-registration.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmedRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmedRegistrationPageRoutingModule {}
