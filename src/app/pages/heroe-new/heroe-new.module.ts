import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HeroeNewRoutingModule } from './heroe-new-routing.module';
import { HeroeNewComponent } from './heroe-new.component';

const angularMaterialModules = [
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [HeroeNewComponent],
  imports: [
    CommonModule,
    HeroeNewRoutingModule,
    ReactiveFormsModule,
    ...angularMaterialModules,
  ],
})
export class HeroeNewModule {}
