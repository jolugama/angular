import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Superhero } from 'src/app/shared/interfaces/superhero';

@Component({
  selector: 'app-confirmation-delete',
  templateUrl: './confirmation-delete.component.html',
  styleUrls: ['./confirmation-delete.component.scss'],
})
export class ConfirmationDeleteComponent {
  isLoading: boolean;
  constructor(
    private dialogRef: MatDialogRef<ConfirmationDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Superhero,
  ) {
    this.isLoading = true;
  }

  imageLoaded() {
    this.isLoading = false;
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
