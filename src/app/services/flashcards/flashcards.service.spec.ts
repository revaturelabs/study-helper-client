import { TestBed } from '@angular/core/testing';
import { FlashcardSet } from 'src/app/models/Flashcards';

import { FlashcardsService } from './flashcards.service';

describe('FlashcardsService', () => {
  let service: FlashcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashcardsService);
  });

  it('adds new user-created flashcards', () => {
    let cards = service.getCards();
    expect(cards).toEqual([]);
    const newCards: FlashcardSet = {
      cards: [],
      createdDate: new Date(),
      name: 'new set',
      tags: ['a tag'],
    };
    service.addCards(newCards);
    cards = service.getCards();
    expect(cards.length).toEqual(1);
    expect(cards[0]).toBe(newCards);
  });
});
