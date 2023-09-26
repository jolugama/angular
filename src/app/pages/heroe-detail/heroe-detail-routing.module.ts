import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeDetailComponent } from './heroe-detail.component';

const routes: Routes = [{ path: '', component: HeroeDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroeDetailRoutingModule {}
