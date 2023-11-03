import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayoutsComponent } from './payouts.component';

const routes: Routes = [
  {
    path: '',
    component: PayoutsComponent,
    title: 'Payouts - ePay | Banking & Merchant Portal'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayoutsRoutingModule { }
