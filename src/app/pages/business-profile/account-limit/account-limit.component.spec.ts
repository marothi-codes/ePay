import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLimitComponent } from './account-limit.component';

describe('AccountLimitComponent', () => {
  let component: AccountLimitComponent;
  let fixture: ComponentFixture<AccountLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
