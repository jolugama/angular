import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { HeroeNewModule } from '../heroe-new/heroe-new.module';
import { HeroeEditRoutingModule } from './heroe-edit-routing.module';
import { HeroeEditComponent } from './heroe-edit.component';

const angularMaterialModules = [MatButtonModule];

const anotherModulesToImport = [HeroeNewModule];

@NgModule({
  declarations: [HeroeEditComponent],
  imports: [
    CommonModule,
    HeroeEditRoutingModule,
    TranslateModule.forChild(),
    ...angularMaterialModules,
    ...anotherModulesToImport,
  ],
})
export class HeroeEditModule {}
