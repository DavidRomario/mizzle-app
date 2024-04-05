import { NgModule } from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module'

import { PoliticsPageRoutingModule } from './politics-routing.module';

import { PoliticsPage } from './politics.page';

@NgModule({
  imports: [
    SharedModule,
    PoliticsPageRoutingModule
  ],
  declarations: [PoliticsPage]
})
export class PoliticsPageModule {}
