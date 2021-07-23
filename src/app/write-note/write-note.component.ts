import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes/notes.service';

@Component({
  selector: 'app-write-note',
  templateUrl: './write-note.component.html',
  styleUrls: ['./write-note.component.scss'],
})
export class WriteNoteComponent implements OnInit {
  constructor(private noteServivce: NotesService) {}

  title = '';
  body = '';

  ngOnInit(): void {}

  submit() {
    this.noteServivce.addNotes({
      title: this.title,
      body: this.body,
      createdDate: new Date(),
    });
    this.title = '';
    this.body = '';
  }
}
