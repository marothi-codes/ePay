import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardEditDialogComponent} from './card-edit-dialog.component';
import {MaterialModule} from '../../../../@fury/shared/material-components.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FurySharedModule} from '../../../../@fury/fury-shared.module';


@NgModule({
    declarations: [CardEditDialogComponent],
    imports: [
        CommonModule,
        FurySharedModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class CardEditDialogModule {
}
