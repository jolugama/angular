import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesListRoutingModule } from './heroes-list-routing.module';
import { HeroesListComponent } from './heroes-list.component';

// Angular Material
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

const angularMaterialModules = [
  MatButtonModule,
  MatTableModule,
  MatBadgeModule,
  MatListModule,
  MatPaginatorModule,
  MatIconModule
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
