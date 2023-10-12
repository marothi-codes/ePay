import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantBalanceCardComponent } from './merchant-balance-card.component';

describe('MerchantBalanceCardComponent', () => {
  let component: MerchantBalanceCardComponent;
  let fixture: ComponentFixture<MerchantBalanceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantBalanceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantBalanceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
