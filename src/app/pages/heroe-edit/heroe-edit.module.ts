import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { HeroeEditRoutingModule } from './heroe-edit-routing.module';
import { HeroeEditComponent } from './heroe-edit.component';

const angularMaterialModules = [MatButtonModule];

@NgModule({
  declarations: [HeroeEditComponent],
  imports: [CommonModule, HeroeEditRoutingModule, ...angularMaterialModules],
})
export class HeroeEditModule {}
