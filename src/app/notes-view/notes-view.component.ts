import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../models/Note';
import { NotesService } from '../services/notes/notes.service';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.scss'],
})
export class NotesViewComponent implements OnInit {
  notes?: Note;

  constructor(
    private route: ActivatedRoute,
    private noteService: NotesService
  ) {}

  ngOnInit(): void {
    this.notes =
      this.noteService.getNotesById(this.route.snapshot.params['id']) ||
      undefined;
    console.log(
      '🚀 ~ file: notes-view.component.ts ~ line 21 ~ NotesViewComponent ~ ngOnInit ~ this.notes',
      this.notes
    );
  }
}
