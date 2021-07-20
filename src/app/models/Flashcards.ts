export interface Flashcard {
  id: string;
  createdDate: Date;
  question: string;
  answer: string;
}

export interface FlashcardSet {
  id: string;
  createdDate: Date;
  lastModifiedDate?: Date;
  title: string;
  tags: string[];
  flashcard: Flashcard[];
}
