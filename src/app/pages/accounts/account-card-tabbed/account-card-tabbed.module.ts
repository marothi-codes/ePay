import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FurySharedModule} from '../../../../@fury/fury-shared.module';
import {FuryCardModule} from '../../../../@fury/shared/card/card.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {AccountCardTabbedComponent} from './account-card-tabbed.component';

@NgModule({
  declarations: [AccountCardTabbedComponent],
  exports: [
    AccountCardTabbedComponent
  ],
  imports: [
    CommonModule,
    FurySharedModule,
    FuryCardModule,
    MatTabsModule,
    MatIconModule,
  ]
})
export class AccountCardTabbedModule { }
