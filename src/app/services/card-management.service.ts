import { Injectable } from '@angular/core';
import {Card} from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardManagementService {

  private cards: Card[] = [];

  constructor() { }

  getCard(id: number) {
    return this.cards.find(x => x.id === id);
  }

  getCards(): Card[] {
    return this.cards;
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }

  updateCard(card: Card): void {
    const existingCard = this.cards.find((c) => c.id === card.id);
    if (existingCard) {
      Object.assign(existingCard, card);
    }
  }

  deleteCard(id: number): void {
    const index = this.cards.findIndex((card) => card.id === id);
    if (index !== -1) {
      this.cards.splice(index, 1);
    }
  }

}
