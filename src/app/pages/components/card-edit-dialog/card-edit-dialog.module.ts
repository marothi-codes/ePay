import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardEditDialogComponent} from './card-edit-dialog.component';
import {MaterialModule} from '../../../../@fury/shared/material-components.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FurySharedModule} from '../../../../@fury/fury-shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [CardEditDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
  ],
  exports: [CardEditDialogComponent],
})
export class CardEditDialogModule {
}
