import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteNoteComponent } from './write-note.component';

describe('WriteNoteComponent', () => {
  let component: WriteNoteComponent;
  let fixture: ComponentFixture<WriteNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteNoteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Clears entries upon submission', () => {
    component.title = 'title';
    component.body = 'body';
    expect(component.title && component.body).toBeTruthy();
    component.submit();
    expect(component.title || component.body).toBeFalsy();
  });
});
