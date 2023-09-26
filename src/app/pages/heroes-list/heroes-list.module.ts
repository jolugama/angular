import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesListRoutingModule } from './heroes-list-routing.module';
import { HeroesListComponent } from './heroes-list.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

const angularMaterialModules = [
  MatButtonModule,
  MatTableModule
];

@NgModule({
  declarations: [HeroesListComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
     HeroesListRoutingModule,
     ...angularMaterialModules],
})
export class HeroesListModule {}
