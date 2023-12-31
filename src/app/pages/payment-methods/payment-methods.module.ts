import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FurySharedModule} from '../../../@fury/fury-shared.module';
import {MaterialModule} from '../../../@fury/shared/material-components.module';
import {PageLayoutDemoContentModule} from '../page-layouts/components/page-layout-content/page-layout-demo-content.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaymentMethodsComponent} from './payment-methods.component';
import { PaymentMethodsRoutingModule } from './payment-methods-routing.module';
import {FuryCardModule} from '../../../@fury/shared/card/card.module';
import { PaymentMethodWidgetComponent } from './payment-method-widget/payment-method-widget.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [PaymentMethodsComponent, PaymentMethodWidgetComponent],
  imports: [
    CommonModule,
    FormsModule,
    FurySharedModule,
    MaterialModule,
    MatSlideToggleModule,
    PageLayoutDemoContentModule,
    ReactiveFormsModule,
    PaymentMethodsRoutingModule,
    FuryCardModule,
  ]
})
export class PaymentMethodsModule {
}
