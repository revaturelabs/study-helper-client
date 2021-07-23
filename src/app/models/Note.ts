export interface Note {
  id?: string;
  title: string;
  createdDate: Date;
  lastModifiedDate?: Date;
  body: string;
}
