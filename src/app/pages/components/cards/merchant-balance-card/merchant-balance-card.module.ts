import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../../../../@fury/shared/material-components.module';
import {MerchantBalanceCardComponent} from './merchant-balance-card.component';



@NgModule({
  declarations: [
    MerchantBalanceCardComponent],
  exports: [
    MerchantBalanceCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class MerchantBalanceCardModule { }
