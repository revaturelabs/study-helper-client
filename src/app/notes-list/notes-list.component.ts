import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note } from '../models/Note';
import { NotesService } from '../services/notes/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  allNotes: Note[] = [];
  noteSubscription: Subscription;

  constructor(private noteService: NotesService) {
    this.noteSubscription = this.noteService.subject.subscribe(
      (updatedNotes) => (this.allNotes = updatedNotes)
    );
  }

  ngOnInit(): void {
    this.noteService.getAllNotes();
  }
}
