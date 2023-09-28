import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { HeroeDetailRoutingModule } from './heroe-detail-routing.module';
import { HeroeDetailComponent } from './heroe-detail.component';

const angularMaterialModules = [MatButtonModule];

@NgModule({
  declarations: [HeroeDetailComponent],
  imports: [
    CommonModule,
    HeroeDetailRoutingModule,
    TranslateModule.forChild(),
    ...angularMaterialModules,
  ],
})
export class HeroeDetailModule {}
