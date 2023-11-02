import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCardTabbedComponent } from './account-card-tabbed.component';

describe('AccountCardTabbedComponent', () => {
  let component: AccountCardTabbedComponent;
  let fixture: ComponentFixture<AccountCardTabbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCardTabbedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountCardTabbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
