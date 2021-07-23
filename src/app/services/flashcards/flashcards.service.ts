import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FlashcardSet } from '../../models/Flashcards';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class FlashcardsService {
  private servicePrefix = 'flashcards';
  private flashcardSets: FlashcardSet[] = [];
  public subject: Subject<FlashcardSet[]> = new Subject<FlashcardSet[]>();

  constructor(private http: HttpService) {
    this.getCards();
  }

  public deleteCards(cards: FlashcardSet) {
    this.http.delete(`${this.servicePrefix}/${cards.id}`).subscribe();
  }

  public getCards() {
    let cards: FlashcardSet[] = [];
    this.http
      .get<FlashcardSet[]>(this.servicePrefix + '/flashcardSets')
      .subscribe((data) => {
        this.flashcardSets = data;
        this.subject.next(data);
        cards = data;
      });
    return cards;
  }

  public getCardsSetById(id: string | number): FlashcardSet | null {
    return this.flashcardSets.find((set) => set.id == id) || null;
  }

  public addCards(cards: FlashcardSet) {
    this.http
      .post(this.servicePrefix + '/flashcardSet', cards)
      .subscribe(() => {
        this.flashcardSets.push(cards);
        this.subject.next(this.flashcardSets);
      });
  }
}
