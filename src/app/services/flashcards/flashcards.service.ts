import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FlashcardSet } from '../../models/Flashcards';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class FlashcardsService {
  private flashcardSets: FlashcardSet[] = [];
  public subject: Subject<FlashcardSet[]> = new Subject<FlashcardSet[]>();

  constructor(private http: HttpService) {
    http.get<FlashcardSet[]>('flashcards').subscribe((data) => {
      this.flashcardSets = data;
    });
  }

  public getCards() {
    return this.flashcardSets;
  }

  public getCardsSetById(id: string | number): FlashcardSet | null {
    return this.flashcardSets.find((set) => set.id == id) || null;
  }

  public addCards(cards: FlashcardSet) {
    this.http.post('flashcards', cards).subscribe(() => {
      this.flashcardSets.push(cards);
      this.subject.next(this.flashcardSets);
    });
  }
}
