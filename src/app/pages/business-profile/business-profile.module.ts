import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BusinessProfileComponent} from './business-profile.component';
import {FurySharedModule} from '../../../@fury/fury-shared.module';
import {MaterialModule} from '../../../@fury/shared/material-components.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HighlightModule} from '../../../@fury/shared/highlightjs/highlight.module';
import {FuryCardModule} from '../../../@fury/shared/card/card.module';
import {BreadcrumbsModule} from '../../../@fury/shared/breadcrumbs/breadcrumbs.module';
import {BusinessProfileRoutingModule} from './business-profile.routing-module';
import { AccountLimitComponent } from './account-limit/account-limit.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { BankDetailsFormComponent } from './bank-details-form/bank-details-form.component';

@NgModule({
  declarations: [
    BusinessProfileComponent,
    AccountLimitComponent,
    AccountDetailsComponent,
    AddressFormComponent,
    BankDetailsFormComponent
  ],
  imports: [
    BreadcrumbsModule,
    BusinessProfileRoutingModule,
    CommonModule,
    FurySharedModule,
    MaterialModule,
    ReactiveFormsModule,
    HighlightModule,
    FuryCardModule,
  ]
})
export class BusinessProfileModule {
}
