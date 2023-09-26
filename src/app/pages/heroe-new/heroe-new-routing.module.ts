import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeNewComponent } from './heroe-new.component';

const routes: Routes = [{ path: '', component: HeroeNewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroeNewRoutingModule {}
