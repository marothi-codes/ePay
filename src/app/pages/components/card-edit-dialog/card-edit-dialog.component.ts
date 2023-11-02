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

  card: Card;
  cardForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      public dialogRef: MatDialogRef<CardEditDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Card,
      private cardService: CardManagementService
  ) {
    this.card = this.cardService.getCard(this.data.id);
  }

  ngOnInit() {
    this.cardForm = this.fb.group({
      id: [this.card.id],
      cardHolderName: [this.card.cardHolderName],
      cardNumber: [this.card.cardNumber],
      expirationDate: [this.card.expirationDate],
      cvv: [this.card.cvv]
    });
  }

  onSaveClick(): void {
    this.cardService.updateCard(this.card);
    this.dialogRef.close(this.cardForm.value);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
