import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', loadChildren: () => import('./pages/heroes-list/heroes-list.module').then(m => m.HeroesListModule) },
  { path: 'new', loadChildren: () => import('./pages/heroe-new/heroe-new.module').then(m => m.HeroeNewModule) },
  { path: 'detail/:id', loadChildren: () => import('./pages/heroe-detail/heroe-detail.module').then(m => m.HeroeDetailModule) },
  { path: 'edit/:id', loadChildren: () => import('./pages/heroe-edit/heroe-edit.module').then(m => m.HeroeEditModule) },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
