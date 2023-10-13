import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { PageLayoutDemoContentModule } from '../page-layouts/components/page-layout-content/page-layout-demo-content.module';
import { PayoutsComponent } from './payouts.component';
import { PayoutsRoutingModule } from './payouts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PayoutsRoutingModule,
    FurySharedModule,
    PageLayoutDemoContentModule,
  ],
  declarations: [PayoutsComponent],
})
export class PayoutsModule {}
