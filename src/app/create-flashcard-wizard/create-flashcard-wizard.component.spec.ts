import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateFlashcardWizardComponent } from './create-flashcard-wizard.component';
import { Flashcard } from '../models/Flashcards';

describe('CreateFlashcardWizardComponent', () => {
  let component: CreateFlashcardWizardComponent;
  let fixture: ComponentFixture<CreateFlashcardWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateFlashcardWizardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFlashcardWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Clears the entries after creating a flashcard', () => {
    const instance = fixture.debugElement.componentInstance;
    instance.name = 'Ivan';
    instance.tags.push('Tag');
    const newCard: Flashcard = {
      id: new Date().getTime().toString(),
      answer: 'Answer',
      createdDate: new Date(),
      question: 'Question',
    };
    instance.cards.push(newCard);
    expect(instance.name).toBeTruthy();
    expect(instance.cards.length).toBeTruthy();
    expect(instance.tags.length).toBeTruthy();
    instance.submit();
    expect(instance.name).toBeFalsy();
    expect(instance.cards.length).toBeFalsy();
    expect(instance.tags.length).toBeFalsy();
  });
});
