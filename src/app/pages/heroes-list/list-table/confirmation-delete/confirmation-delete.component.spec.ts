// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { ConfirmationDeleteComponent } from './confirmation-delete.component';

// describe('ConfirmationDeleteComponent', () => {
//   let component: ConfirmationDeleteComponent;
//   let fixture: ComponentFixture<ConfirmationDeleteComponent>;
//   let mockDialogRef: { close: jasmine.Spy };

//   beforeEach(async () => {
//     mockDialogRef = { close: jasmine.createSpy('close') };

//     await TestBed.configureTestingModule({
//       imports: [NoopAnimationsModule],
//       declarations: [ConfirmationDeleteComponent],
//       providers: [
//         { provide: MatDialogRef, useValue: mockDialogRef },
//         { provide: MAT_DIALOG_DATA, useValue: {} },
//       ],
//     }).compileComponents();

//     fixture = TestBed.createComponent(ConfirmationDeleteComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should change isLoading when imageLoaded is called', () => {
//     component.imageLoaded();
//     expect(component.isLoading).toBeFalse();
//   });

//   it('should close dialog on no click with false', () => {
//     component.onNoClick();
//     expect(mockDialogRef.close).toHaveBeenCalledWith(false);
//   });

//   it('should close dialog on yes click with true', () => {
//     component.onYesClick();
//     expect(mockDialogRef.close).toHaveBeenCalledWith(true);
//   });
// });
