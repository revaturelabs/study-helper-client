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

  // constructor(private http: HttpService) {
  //   http.get<Note[]>(this.servicePrefix + '/notes').subscribe((data) => {
  //     this.notes = data;
  //   });
  // }

  // public getAllNotes() {
  //   return this.notes;
  // }

  constructor(private http: HttpService) {
    this.getAllNotes();
  }

  public getAllNotes() {
    this.http
      .get<Note[]>(this.servicePrefix + '/notes')
      .subscribe((data) => {
        this.notes = data;
        this.subject.next(data);
      });
  }

  public getNotesById(id: string | number): Note | null {
    return this.notes.find((note) => note.id == id) || null;
  }

  public addNotes(newNote: Note) {
    this.http.post(this.servicePrefix + '/notes', newNote).subscribe(() => {
      this.notes.push(newNote);
      this.subject.next(this.notes);
    });
  }
}
