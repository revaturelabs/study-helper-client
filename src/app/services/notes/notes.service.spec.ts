import { TestBed } from '@angular/core/testing';
import { Note } from 'src/app/models/Note';

import { NotesService } from './notes.service';

describe('NotesService', () => {
  let service: NotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesService);
  });

  it('adds new user-created notes', () => {
    let allNotes = service.getAllNotes();
    expect(allNotes).toEqual([]);
    const newNote: Note = {
      id: new Date().getTime().toString(),
      body: 'body',
      createdDate: new Date(),
      title: 'title',
    };
    service.addNotes(newNote);
    allNotes = service.getAllNotes();
    expect(allNotes.length).toEqual(1);
    expect(allNotes[0]).toBe(newNote);
  });
});
