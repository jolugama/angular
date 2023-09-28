import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heroe-edit',
  templateUrl: './heroe-edit.component.html',
  styleUrls: ['./heroe-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroeEditComponent {
  constructor() {}
}
