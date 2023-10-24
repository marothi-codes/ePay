import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Card} from '../../../models/card.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CardManagementService} from '../../../services/card-management.service';

@Component({
  selector: 'fury-card-edit-dialog',
  templateUrl: './card-edit-dialog.component.html',
  styleUrls: ['./card-edit-dialog.component.scss'],
})
export class CardEditDialogComponent implements OnInit {

  cardForm: FormGroup;
  card: Card;

  constructor(
      private fb: FormBuilder,
      public dialogRef: MatDialogRef<CardEditDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private cardService: CardManagementService
  ) {}

  ngOnInit() {
    this.cardForm = this.fb.group({
      cardHolderName: [this.card.cardHolderName, [Validators.required]],
      cardNumber: [this.card.cardNumber, [Validators.required]],
      expirationDate: [this.card.expirationDate, [Validators.required]],
      cvv: [this.card.cvv, [Validators.required]]
    });
    this.card = this.cardService.getCard(this.data.id);
  }

  onSaveClick(): void {
    this.dialogRef.close(this.cardForm.value);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
