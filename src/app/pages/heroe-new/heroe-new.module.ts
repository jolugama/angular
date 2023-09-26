import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeNewRoutingModule } from './heroe-new-routing.module';
import { HeroeNewComponent } from './heroe-new.component';


@NgModule({
  declarations: [
    HeroeNewComponent
  ],
  imports: [
    CommonModule,
    HeroeNewRoutingModule
  ]
})
export class HeroeNewModule { }
