import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {FurySharedModule} from '../../../@fury/fury-shared.module';
import {MaterialModule} from '../../../@fury/shared/material-components.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HighlightModule} from '../../../@fury/shared/highlightjs/highlight.module';
import {FuryCardModule} from '../../../@fury/shared/card/card.module';
import {BreadcrumbsModule} from '../../../@fury/shared/breadcrumbs/breadcrumbs.module';
import {ProfileRoutingModule} from './profile.routing.module';
import {ContactDetailsFormModule} from '../components/contact-details-form/contact-details-form.module';

@NgModule({
    imports: [
        CommonModule,
        ContactDetailsFormModule,
        FurySharedModule,
        MaterialModule,
        ProfileRoutingModule,
        ReactiveFormsModule,

        // Core
        HighlightModule,
        FuryCardModule,
        BreadcrumbsModule
    ],
    declarations: [ProfileComponent]
})
export class ProfileModule {
}
