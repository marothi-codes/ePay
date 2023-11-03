import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fury-payment-method-widget',
  templateUrl: './payment-method-widget.component.html',
  styleUrls: ['./payment-method-widget.component.scss']
})
export class PaymentMethodWidgetComponent implements OnInit {

  // Model binding fields.
  @Input() paymentMethodName: string;
  @Input() paymentMethodLogo: string;

  // Payment method status boolean flag.
  @Input() enabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
