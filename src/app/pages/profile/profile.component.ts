import { Component, OnInit } from '@angular/core';
import {fadeInUpAnimation} from '../../../@fury/animations/fade-in-up.animation';
import {fadeInRightAnimation} from '../../../@fury/animations/fade-in-right.animation';

@Component({
  selector: 'fury-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [fadeInUpAnimation, fadeInRightAnimation]
})
export class ProfileComponent implements OnInit {

  /**
   * Needed for the Layout
   */
  private _gap = 16;
  gap = `${this._gap}px`;

  constructor() { }

  col(colAmount: number) {
    return `1 1 calc(${100 / colAmount}% - ${this._gap - (this._gap / colAmount)}px)`;
  }

  ngOnInit(): void {
  }

}
