import { Component, OnInit } from '@angular/core';
import { Note } from '../models/Note';
import { NotesService } from '../services/notes/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  allNotes: Note[] = [];
  constructor(private noteService: NotesService) {}

  ngOnInit(): void {
    this.allNotes = this.noteService.getAllNotes();
    this.noteService.subject.subscribe((updatedNotes) => {
      this.allNotes = updatedNotes;
    });
  }
}
