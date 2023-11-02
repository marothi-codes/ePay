import { Component, OnInit } from '@angular/core';
import {CardManagementService} from '../../../services/card-management.service';
import {MatDialog} from '@angular/material/dialog';
import {CardEditDialogComponent} from '../card-edit-dialog/card-edit-dialog.component';
import {Card} from '../../../models/card.model';
import {Observable, ReplaySubject} from 'rxjs';

@Component({
  selector: 'fury-card-management',
  templateUrl: './card-management.component.html',
  styleUrls: ['./card-management.component.scss']
})
export class CardManagementComponent implements OnInit {

  cards: Card[] = [];

  constructor(private cardService: CardManagementService, public dialog: MatDialog) { }

  private sampleCard1: Card = {
    id: 1,
    cardHolderName: 'John Doe',
    cvv: 123,
    expirationDate: '04/25',
    cardNumber: '4000 0000 0000 0000',
    type: 'Visa'
  };

  private sampleCard2: Card = {
    id: 2,
    cardHolderName: 'Jake Doe',
    cvv: 987,
    expirationDate: '03/28',
    cardNumber: '5000 0000 0000 0000',
    type: 'Master Card'
  };

  private sampleCard3: Card = {
    id: 3,
    cardHolderName: 'Jane Doe',
    cvv: 321,
    expirationDate: '12/23',
    cardNumber: '4000 0000 0000 0000',
    type: 'Visa'
  };

  ngOnInit(): void {

    this.cardService.addCard(this.sampleCard1);
    this.cardService.addCard(this.sampleCard2);
    this.cardService.addCard(this.sampleCard3);

    this.cards = this.cardService.getCards();

  }

  editCard(card: Card): void {
    this.dialog.open(CardEditDialogComponent, {
      data: card // Pass the data to the edit modal component
    })
      .afterClosed()
      .subscribe(res => {
      if (res) {
        this.cardService.updateCard(res);
      }
    });

  }

  deleteCard(index: number) {
    this.cardService.deleteCard(index);
  }

}
