import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Question } from 'src/app/shared/interfaces/question';

@Component({
  selector: 'app-confirmation-new',
  templateUrl: './confirmation-new.component.html',
  styleUrls: ['./confirmation-new.component.scss'],
})
export class ConfirmationNewComponent {
  constructor(
    private dialogRef: MatDialogRef<ConfirmationNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Question,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
