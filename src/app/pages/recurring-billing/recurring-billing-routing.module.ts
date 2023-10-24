import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecurringBillingComponent} from './recurring-billing.component';

const routes: Routes = [
  {
    path: '',
    component: RecurringBillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecurringBillingRoutingModule { }
