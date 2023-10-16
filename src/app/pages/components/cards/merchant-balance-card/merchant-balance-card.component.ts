import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fury-merchant-balance-card',
  templateUrl: './merchant-balance-card.component.html',
  styleUrls: ['./merchant-balance-card.component.scss'],
})
export class MerchantBalanceCardComponent implements OnInit {

  currentBalance: number = 50000; // Example current balance in ZAR
  retainedAmount: number = 1000; // Example retained amount in ZAR
  availableBalance: number = 49000; // Example available balance in ZAR
  payoutFee: number = 58; // Example payout fee in ZAR
  availableForPayout: number = 48942; // Example available for payout in ZAR

  constructor() {}

  ngOnInit(): void {}
}
