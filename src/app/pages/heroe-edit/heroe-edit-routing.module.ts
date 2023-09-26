import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeEditComponent } from './heroe-edit.component';

const routes: Routes = [{ path: '', component: HeroeEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroeEditRoutingModule {}
