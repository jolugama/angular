import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { HeroeDetailRoutingModule } from './heroe-detail-routing.module';
import { HeroeDetailComponent } from './heroe-detail.component';

const angularMaterialModules = [MatButtonModule];

@NgModule({
  declarations: [HeroeDetailComponent],
  imports: [CommonModule, HeroeDetailRoutingModule, ...angularMaterialModules],
})
export class HeroeDetailModule {}
