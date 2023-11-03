import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'fury-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  sameAsAbove = false;

  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      // Physical Address Fields
      physicalAddressLine1: [null, [Validators.required]],
      physicalAddressLine2: [null],
      physicalAddressSuburb: [null, [Validators.required]],
      physicalAddressTownCity: [null, Validators.required],
      physicalAddressStateProvince: [null, [Validators.required]],
      physicalAddressPostalCode: [null, [Validators.required, Validators.minLength(4)]],
      physicalAddressCountry: [null, [Validators.required]],

      // Same as above checkbox flag.
      sameAsAbove: [false],

      // Postal Address Fields
      postalAddressLine1: [null, [Validators.required]],
      postalAddressLine2: [null],
      postalAddressSuburb: [null, [Validators.required]],
      postalAddressTownCity: [null, Validators.required],
      postalAddressStateProvince: [null, [Validators.required]],
      postalAddressPostalCode: [null, [Validators.required, Validators.minLength(4)]],
      postalAddressCountry: [null, [Validators.required]]
    });
  }

  copyPhysicalAddressToPostalAddress(sameAsAbove: boolean) {
    // Subscribe to the 'sameAsAbove' checkbox value changes.
    this.sameAsAbove = sameAsAbove;

    if (this.sameAsAbove) {
      this.addressForm.get('postalAddressLine1')
        .setValue(this.addressForm.get('physicalAddressLine1').value);

      this.addressForm.get('postalAddressLine2')
        .setValue(this.addressForm.get('physicalAddressLine2').value);

      this.addressForm.get('postalAddressSuburb')
        .setValue(this.addressForm.get('physicalAddressSuburb').value);

      this.addressForm.get('postalAddressTownCity')
        .setValue(this.addressForm.get('physicalAddressTownCity').value);

      this.addressForm.get('postalAddressStateProvince')
        .setValue(this.addressForm.get('physicalAddressStateProvince').value);

      this.addressForm.get('postalAddressPostalCode')
        .setValue(this.addressForm.get('physicalAddressPostalCode').value);

      this.addressForm.get('postalAddressCountry')
        .setValue(this.addressForm.get('physicalAddressCountry').value);
    }
  }

  ngOnInit(): void {
  }

}
