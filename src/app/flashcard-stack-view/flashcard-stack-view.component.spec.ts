import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { FlashcardSet } from '../models/Flashcards';
import { FlashcardsService } from '../services/flashcards/flashcards.service';

import { FlashcardStackViewComponent } from './flashcard-stack-view.component';

const STACK_ID = new Date().getTime().toString();

describe('FlashcardStackViewComponent', () => {
  let component: FlashcardStackViewComponent;
  let fixture: ComponentFixture<FlashcardStackViewComponent>;
  let service: FlashcardsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashcardStackViewComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                id: STACK_ID,
              },
            },
          },
        },
      ],
    }).compileComponents();
    service = TestBed.inject(FlashcardsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardStackViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Retrieves the correct card stack based on route parameter "ID"', () => {
    const newCards: FlashcardSet = {
      id: STACK_ID,
      flashcard: [],
      createdDate: new Date(),
      title: 'new set',
      tags: ['a tag'],
    };
    service.addCards(newCards);
    component.ngOnInit();
    expect(component.set).toEqual(newCards);
  });
});
