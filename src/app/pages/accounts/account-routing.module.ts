import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountsComponent} from './accounts.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsComponent,
    title: 'My Accounts - ePay | Banking & Merchant Portal'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
