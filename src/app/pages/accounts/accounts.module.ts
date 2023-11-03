import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FurySharedModule} from '../../../@fury/fury-shared.module';
import {FuryCardModule} from '../../../@fury/shared/card/card.module';
import {PageLayoutDemoContentModule} from '../page-layouts/components/page-layout-content/page-layout-demo-content.module';
import {MatTabsModule} from '@angular/material/tabs';
import {AccountRoutingModule} from './account-routing.module';
import {AccountsComponent} from './accounts.component';
import {AccountCardTabbedModule} from './account-card-tabbed/account-card-tabbed.module';
import {MaterialModule} from '../../../@fury/shared/material-components.module';

@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    AccountCardTabbedModule,
    FurySharedModule,
    FuryCardModule,
    MaterialModule,
    PageLayoutDemoContentModule,
    MatTabsModule
  ]
})
export class AccountsModule { }
