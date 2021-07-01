import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FlashcardSet } from '../../models/Flashcards';

@Injectable({
  providedIn: 'root',
})
export class FlashcardsService {
  private flashcardSets: FlashcardSet[] = [];
  public subject: Subject<FlashcardSet[]> = new Subject<FlashcardSet[]>();

  public getCards() {
    return this.flashcardSets;
  }

  public getCardsSetById(id: string | number): FlashcardSet | null {
    return this.flashcardSets.find((set) => set.id == id) || null;
  }

  public addCards(cards: FlashcardSet) {
    this.flashcardSets.push(cards);
    this.subject.next(this.flashcardSets);
  }
}
