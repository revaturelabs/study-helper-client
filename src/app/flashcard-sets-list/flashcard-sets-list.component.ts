import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlashcardSet } from '../models/Flashcards';
import { FlashcardsService } from '../services/flashcards/flashcards.service';

@Component({
  selector: 'app-flashcard-sets-list',
  templateUrl: './flashcard-sets-list.component.html',
  styleUrls: ['./flashcard-sets-list.component.scss'],
})
export class FlashcardSetsListComponent implements OnInit, OnDestroy {
  cardSets: FlashcardSet[] = [];
  cardSubscription: Subscription;

  constructor(private cardService: FlashcardsService) {
    this.cardSubscription = this.cardService.subject.subscribe(
      (updatedCardSets) => {
        this.cardSets = updatedCardSets;
      }
    );
  }

  ngOnInit(): void {
    this.cardService.getCards();
  }

  ngOnDestroy() {
    this.cardSubscription.unsubscribe();
  }
}
