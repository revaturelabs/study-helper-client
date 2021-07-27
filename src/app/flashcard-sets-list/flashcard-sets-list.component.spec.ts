import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardSetsListComponent } from './flashcard-sets-list.component';

describe('FlashcardSetsListComponent', () => {
  let component: FlashcardSetsListComponent;
  let fixture: ComponentFixture<FlashcardSetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardSetsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardSetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
