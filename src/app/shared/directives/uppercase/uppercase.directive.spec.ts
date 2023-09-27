import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UppercaseDirective } from './uppercase.directive';

@Component({
  template: `<input type="text" appUppercase />`,
})
class TestComponent {}

describe('UppercaseDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UppercaseDirective, TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    inputEl = fixture.nativeElement.querySelector('input');
  });

  it('should uppercase input value', () => {
    inputEl.value = 'lowercase';
    inputEl.dispatchEvent(new Event('input'));
    expect(inputEl.value).toBe('LOWERCASE');
  });
});
