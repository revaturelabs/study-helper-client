import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Note } from 'src/app/models/Note';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private servicePrefix = 'notes';
  private notes: Note[] = [];
  public subject: Subject<Note[]> = new Subject<Note[]>();

  constructor(private http: HttpService) {
    this.getAllNotes();
  }

  public deleteNote(id: string | number) {
    this.http.delete(`${this.servicePrefix}/${id}`).subscribe();
  }

  public getAllNotes() {
    let d: Note[] = [];
    this.http.get<Note[]>(this.servicePrefix + '/notes').subscribe((data) => {
      this.notes = data;
      this.subject.next(data);
      d = data;
    });
    return d;
  }

  public getNotesById(id: string | number): Note | null {
    return this.notes.find((note) => note.id == id) || null;
  }

  public addNotes(newNote: Note) {
    this.http.post(this.servicePrefix + '/note', newNote).subscribe(() => {
      this.notes.push(newNote);
      this.subject.next(this.notes);
    });
  }
}
