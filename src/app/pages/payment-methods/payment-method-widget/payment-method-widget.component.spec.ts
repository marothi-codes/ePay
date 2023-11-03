import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodWidgetComponent } from './payment-method-widget.component';

describe('PaymentMethodWidgetComponent', () => {
  let component: PaymentMethodWidgetComponent;
  let fixture: ComponentFixture<PaymentMethodWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentMethodWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
