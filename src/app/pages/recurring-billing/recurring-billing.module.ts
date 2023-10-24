import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FurySharedModule} from '../../../@fury/fury-shared.module';
import {MaterialModule} from '../../../@fury/shared/material-components.module';
import {PageLayoutDemoContentModule} from '../page-layouts/components/page-layout-content/page-layout-demo-content.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RecurringBillingRoutingModule} from './recurring-billing-routing.module';
import {RecurringBillingComponent} from './recurring-billing.component';



@NgModule({
  declarations: [RecurringBillingComponent],
  imports: [
    CommonModule,
    FurySharedModule,
    MaterialModule,
    RecurringBillingRoutingModule,
    PageLayoutDemoContentModule,
    ReactiveFormsModule,
  ]
})
export class RecurringBillingModule { }
