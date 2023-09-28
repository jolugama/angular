import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Superhero } from 'src/app/shared/interfaces/superhero';
import { HeroesService } from 'src/app/shared/services/heroes/heroes.service';
import { ConfirmationDeleteComponent } from './confirmation-delete/confirmation-delete.component';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTableComponent {
  @Input() superheroes: Superhero[] = [];
  @Output() updateTable = new EventEmitter<void>();
  displayedColumns: string[] = [
    'name',
    'alias',
    'universe',
    'abilities',
    'edit',
    'delete',
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private heroesService: HeroesService,
  ) {}

  openDeleteDialog(hero: Superhero): void {
    const dialogRef = this.dialog.open(ConfirmationDeleteComponent, {
      data: hero,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteItem(hero);
      }
    });
  }

  // private methods

  private deleteItem(hero: Superhero): void {
    console.log('deleteItem', hero);
    this.heroesService.deleteSuperhero(hero.id).subscribe({
      next: () => {
        this.updateTable.emit();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
