import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { UppercaseDirective } from 'src/app/shared/directives/uppercase/uppercase.directive';
import { HeroesListRoutingModule } from './heroes-list-routing.module';
import { HeroesListComponent } from './heroes-list.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ListPaginationComponent } from './list-pagination/list-pagination.component';
import { ConfirmationDeleteComponent } from './list-table/confirmation-delete/confirmation-delete.component';
import { ListTableComponent } from './list-table/list-table.component';

const components = [
  HeroesListComponent,
  ListHeaderComponent,
  ListTableComponent,
  ListPaginationComponent,
];

const angularMaterialModules = [
  MatButtonModule,
  MatTableModule,
  MatListModule,
  MatPaginatorModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
];

const directives = [UppercaseDirective];

@NgModule({
  declarations: [...components, ...directives, ConfirmationDeleteComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    HeroesListRoutingModule,
    ReactiveFormsModule,
    ...angularMaterialModules,
  ],
})
export class HeroesListModule {}
