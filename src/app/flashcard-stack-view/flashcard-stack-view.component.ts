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
  currentIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private cardService: FlashcardsService
  ) {}

  nextCard(): void {
    this.currentIndex++;
    if (this.currentIndex >= this.set!.flashcard.length) {
      this.currentIndex = 0;
    }
  }

  prevCard(): void {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.set!.flashcard.length - 1;
    }
  }

  ngOnInit(): void {
    this.set =
      this.cardService.getCardsSetById(this.route.snapshot.params['id']) ||
      undefined;
    console.log(
      '🚀 ~ file: flashcard-stack-view.component.ts ~ line 21 ~ FlashcardStackViewComponent ~ ngOnInit ~ this.set',
      this.set
    );
  }
}
