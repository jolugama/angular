import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeEditRoutingModule } from './heroe-edit-routing.module';
import { HeroeEditComponent } from './heroe-edit.component';


@NgModule({
  declarations: [
    HeroeEditComponent
  ],
  imports: [
    CommonModule,
    HeroeEditRoutingModule
  ]
})
export class HeroeEditModule { }
