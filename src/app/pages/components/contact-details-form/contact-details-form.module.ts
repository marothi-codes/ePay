import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactDetailsFormComponent} from './contact-details-form.component';
import {FurySharedModule} from '../../../../@fury/fury-shared.module';
import {MaterialModule} from '../../../../@fury/shared/material-components.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [ContactDetailsFormComponent],
    exports: [
        ContactDetailsFormComponent,
    ],
    imports: [
        CommonModule,
        FurySharedModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class ContactDetailsFormModule {
}
