import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeDetailRoutingModule } from './heroe-detail-routing.module';
import { HeroeDetailComponent } from './heroe-detail.component';

@NgModule({
  declarations: [HeroeDetailComponent],
  imports: [CommonModule, HeroeDetailRoutingModule],
})
export class HeroeDetailModule {}
