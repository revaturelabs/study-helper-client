import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CreateFlashcardWizardComponent } from './create-flashcard-wizard/create-flashcard-wizard.component';
import { FlashcardStackViewComponent } from './flashcard-stack-view/flashcard-stack-view.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NotesViewComponent } from './notes-view/notes-view.component';
import { WriteNoteComponent } from './write-note/write-note.component';

const routes: Routes = [
  { path: 'createset', component: CreateFlashcardWizardComponent },
  { path: 'write', component: WriteNoteComponent },
  { path: 'cards/:id', component: FlashcardStackViewComponent },
  { path: 'notes/:id', component: NotesViewComponent },
  { path: '', component: MainpageComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
