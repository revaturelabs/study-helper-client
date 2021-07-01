export interface Flashcard {
  createdDate: Date;
  question: string;
  answer: string;
}

export interface FlashcardSet {
  id: string;
  createdDate: Date;
  lastModifiedDate?: Date;
  name: string;
  tags: string[];
  cards: Flashcard[];
}
