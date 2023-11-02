import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FurySharedModule} from 'src/@fury/fury-shared.module';
import {MaterialModule} from '../../../@fury/shared/material-components.module';
import {MerchantBalanceCardModule} from '../components/cards/merchant-balance-card/merchant-balance-card.module';
import {PageLayoutDemoContentModule} from '../page-layouts/components/page-layout-content/page-layout-demo-content.module';
import {PayoutsComponent} from './payouts.component';
import {PayoutsRoutingModule} from './payouts-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HighlightModule} from '../../../@fury/shared/highlightjs/highlight.module';
import {FuryCardModule} from '../../../@fury/shared/card/card.module';
import {BreadcrumbsModule} from '../../../@fury/shared/breadcrumbs/breadcrumbs.module';

@NgModule({
  imports: [
    CommonModule,
    FurySharedModule,
    MerchantBalanceCardModule,
    MaterialModule,
    PayoutsRoutingModule,
    PageLayoutDemoContentModule,
    ReactiveFormsModule,

    // Core
    HighlightModule,
    FuryCardModule,
    BreadcrumbsModule
  ],
  declarations: [PayoutsComponent],
})
export class PayoutsModule {
}
