import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationNewComponent } from './confirmation-new.component';

describe('ConfirmationNewComponent', () => {
  let component: ConfirmationNewComponent;
  let fixture: ComponentFixture<ConfirmationNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationNewComponent],
    });
    fixture = TestBed.createComponent(ConfirmationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
