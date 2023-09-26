import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesListRoutingModule } from './heroes-list-routing.module';
import { HeroesListComponent } from './heroes-list.component';

@NgModule({
  declarations: [HeroesListComponent],
  imports: [CommonModule, HeroesListRoutingModule],
})
export class HeroesListModule {}
