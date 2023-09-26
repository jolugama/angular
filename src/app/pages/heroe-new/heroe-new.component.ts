import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heroe-new',
  templateUrl: './heroe-new.component.html',
  styleUrls: ['./heroe-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroeNewComponent {}
