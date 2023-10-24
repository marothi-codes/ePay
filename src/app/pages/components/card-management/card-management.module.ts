import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardManagementComponent} from './card-management.component';
import {FurySharedModule} from '../../../../@fury/fury-shared.module';
import {MaterialModule} from '../../../../@fury/shared/material-components.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CardEditDialogModule} from '../card-edit-dialog/card-edit-dialog.module';

@NgModule({
    imports: [
        CardEditDialogModule,
        CommonModule,
        FurySharedModule,
        MaterialModule
    ],
    exports: [CardManagementComponent],
    declarations: [
        CardManagementComponent
    ]
})
export class CardManagementModule {
}
