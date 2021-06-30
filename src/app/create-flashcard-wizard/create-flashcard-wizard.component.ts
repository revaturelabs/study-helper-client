import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Flashcard } from '../models/Flashcards';

@Component({
  selector: 'app-create-flashcard-wizard',
  templateUrl: './create-flashcard-wizard.component.html',
  styleUrls: ['./create-flashcard-wizard.component.scss'],
})
export class CreateFlashcardWizardComponent implements OnInit {
  name = '';
  tags: string[] = [];
  tagName = '';
  cards: Flashcard[] = [];
  question = '';
  answer = '';

  constructor() {}

  ngOnInit() {}

  onAddTag() {
    this.tags.push(this.tagName);
    this.tagName = '';
  }

  onAddCard() {
    const { answer, question } = this;
    this.cards.push({
      answer,
      question,
      createdDate: new Date(),
    });
    this.question = '';
    this.answer = '';
  }

  submit() {
    this.name = '';
    this.tags = [];
    this.tagName = '';
    this.cards = [];
  }
}
