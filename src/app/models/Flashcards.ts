export interface Flashcard {
  id?: number;
  createdDate: Date;
  question: string;
  answer: string;
}

export interface FlashcardSet {
  id?: number;
  createdDate: Date;
  lastModifiedDate?: Date;
  title: string;
  tags: string[];
  flashcard: Flashcard[];
}
