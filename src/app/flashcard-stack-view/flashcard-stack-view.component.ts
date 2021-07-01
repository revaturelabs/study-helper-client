import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlashcardSet } from '../models/Flashcards';
import { FlashcardsService } from '../services/flashcards/flashcards.service';

@Component({
  selector: 'app-flashcard-stack-view',
  templateUrl: './flashcard-stack-view.component.html',
  styleUrls: ['./flashcard-stack-view.component.scss'],
})
export class FlashcardStackViewComponent implements OnInit {
  set?: FlashcardSet;

  constructor(
    private route: ActivatedRoute,
    private cardService: FlashcardsService
  ) {}

  ngOnInit(): void {
    this.set =
      this.cardService.getCardsSetById(this.route.snapshot.params['id']) ||
      undefined;
  }
}
