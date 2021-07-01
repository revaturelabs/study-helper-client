import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Note } from 'src/app/models/Note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes: Note[] = [];
  public subject: Subject<Note[]> = new Subject<Note[]>();

  public getAllNotes() {
    return this.notes;
  }

  public getNotesById(id: string | number): Note | null {
    return this.notes.find((note) => note.id == id) || null;
  }

  public addNotes(newNote: Note) {
    this.notes.push(newNote);
    this.subject.next(this.notes);
  }
}
