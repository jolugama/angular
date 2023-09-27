// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { of } from 'rxjs';
// import { Paginator } from 'src/app/shared/interfaces/paginator';
// import { SuperheroSearch } from 'src/app/shared/interfaces/superhero';
// import { HeroesService } from 'src/app/shared/services/heroes/heroes.service';
// import { HeroesListComponent } from './heroes-list.component';

// @Component({ selector: 'app-list-header', template: '' })
// class ListHeaderComponent {
//   @Output() updateSearch = new EventEmitter();
// }

// @Component({ selector: 'app-list-table', template: '' })
// class ListTableComponent {
//   @Input() superheroes: Paginator = {} as Paginator;
//   @Output() updateTable = new EventEmitter();
// }

// @Component({ selector: 'app-list-pagination', template: '' })
// class ListPaginationComponent {
//   @Input() paginator: Paginator = {} as Paginator;
//   @Output() paginatorChange = new EventEmitter();
// }

// class HeroesServiceMock {
//   getSuperheroSearch(search: SuperheroSearch, pageIndex: number) {
//     return of({
//       superheroes: [],
//       length: 0,
//       pageSize: 5,
//       pageIndex: 0,
//     });
//   }
// }

// describe('HeroesListComponent', () => {
//   let component: HeroesListComponent;
//   let fixture: ComponentFixture<HeroesListComponent>;
//   let heroesService: HeroesService;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [
//         HeroesListComponent,
//         ListHeaderComponent,
//         ListTableComponent,
//         ListPaginationComponent,
//       ],
//       providers: [{ provide: HeroesService, useClass: HeroesServiceMock }],
//     }).compileComponents();

//     fixture = TestBed.createComponent(HeroesListComponent);
//     component = fixture.componentInstance;
//     heroesService = TestBed.inject(HeroesService);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
