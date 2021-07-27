import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Flashcard } from 'src/app/models/Flashcards';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
})
export class FlipCardComponent implements OnInit, OnChanges {
  @Input() card!: Flashcard;
  flipped = false;
  flashcardDomRef = document.getElementById('flashcard');

  constructor() {}

  ngOnChanges(changes: any): void {
    this.flipped = false;
  }

  flipCard(): void {
    this.flipped = !this.flipped;
  }

  ngOnInit(): void {}
}
