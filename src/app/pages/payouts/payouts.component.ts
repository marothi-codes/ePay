import {Component, OnInit} from '@angular/core';
import {fadeInUpAnimation} from '../../../@fury/animations/fade-in-up.animation';
import {fadeInRightAnimation} from '../../../@fury/animations/fade-in-right.animation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'fury-payouts',
  templateUrl: './payouts.component.html',
  styleUrls: ['./payouts.component.scss'],
  animations: [fadeInUpAnimation, fadeInRightAnimation]
})
export class PayoutsComponent implements OnInit {
  payoutForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.payoutForm = this.fb.group({
      payoutAmount: [null, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.payoutForm.valid) {
      const amount = this.payoutForm.get('payoutAmount').value;
      // Handle form submission or API request here
    }
  }

}
