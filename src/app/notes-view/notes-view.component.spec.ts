import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Note } from '../models/Note';
import { NotesService } from '../services/notes/notes.service';

import { NotesViewComponent } from './notes-view.component';

describe('NotesViewComponent', () => {
  let component: NotesViewComponent;
  let fixture: ComponentFixture<NotesViewComponent>;
  let service: NotesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotesViewComponent],
    }).compileComponents();
    service = TestBed.inject(NotesService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should render the correct notes based on route parameter "ID"', () => {
    const newNote: Note = {
      body: 'body',
      createdDate: new Date(),
      title: 'title',
    };
    service.addNotes(newNote);
    component.ngOnInit();
    expect(component.notes).toEqual(newNote);
  });
});
