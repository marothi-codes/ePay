import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationDocumentsComponent } from './verification-documents.component';

describe('VerificationDocumentsComponent', () => {
  let component: VerificationDocumentsComponent;
  let fixture: ComponentFixture<VerificationDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
