import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FurySharedModule} from '../../../../@fury/fury-shared.module';
import {FuryCardModule} from '../../../../@fury/shared/card/card.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {AccountCardTabbedComponent} from './account-card-tabbed.component';
import {ListModule} from '../../../../@fury/shared/list/list.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';

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
    ListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDividerModule,
  ]
})
export class AccountCardTabbedModule { }
