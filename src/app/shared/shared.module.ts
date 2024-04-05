import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    HttpClientModule
  ],
})
export class SharedModule {}
