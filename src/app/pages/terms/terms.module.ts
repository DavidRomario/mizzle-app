import { NgModule } from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module'

import { TermsPageRoutingModule } from './terms-routing.module';

import { TermsPage } from './terms.page';

@NgModule({
  imports: [
    SharedModule,
    TermsPageRoutingModule
  ],
  declarations: [TermsPage]
})
export class TermsPageModule {}
