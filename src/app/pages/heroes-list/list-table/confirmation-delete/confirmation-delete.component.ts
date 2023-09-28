import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Superhero } from 'src/app/shared/interfaces/superhero';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-confirmation-delete',
  templateUrl: './confirmation-delete.component.html',
  styleUrls: ['./confirmation-delete.component.scss'],
})
export class ConfirmationDeleteComponent {
  isLoading: boolean;
  imgURL!: string;
  errorImg: boolean;
  private imagesBaseUrl = environment.imagesBaseUrl;
  constructor(
    private dialogRef: MatDialogRef<ConfirmationDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Superhero,
  ) {
    this.isLoading = true;
    this.errorImg = false;

    if (data?.images && data?.images[0]) {
      this.imgURL = `${this.imagesBaseUrl}/${data.images[0]}`;
    } else {
      this.errorImg = true;
      this.isLoading = false;
    }
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

  onImgError(): void {
    this.errorImg = true;
  }
}
