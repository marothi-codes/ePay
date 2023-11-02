import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutCardTabbedRoutingModule } from './page-layout-card-tabbed-routing.module';
import { PageLayoutCardTabbedComponent } from './page-layout-card-tabbed.component';
import { FurySharedModule } from '../../../../@fury/fury-shared.module';
import { FuryCardModule } from '../../../../@fury/shared/card/card.module';
import { PageLayoutDemoContentModule } from '../components/page-layout-content/page-layout-demo-content.module';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [PageLayoutCardTabbedComponent],
  imports: [
    CommonModule,
    PageLayoutCardTabbedRoutingModule,
    FurySharedModule,
    FuryCardModule,
    PageLayoutDemoContentModule,
    MatCardModule,
    MatTabsModule
  ]
})
export class PageLayoutCardTabbedModule {
}
