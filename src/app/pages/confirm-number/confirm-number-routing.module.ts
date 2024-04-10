import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmNumberPage } from './confirm-number.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmNumberPageRoutingModule {}
