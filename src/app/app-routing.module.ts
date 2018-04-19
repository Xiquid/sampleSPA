import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WillkommensseiteComponent } from './willkommensseite/willkommensseite.component';
import { StoryComponent } from './story/story.component';
import { StoryFormComponent } from './story-form/story-form.component';


const routes: Routes = [
  { path: '', component: WillkommensseiteComponent },
  { path: 'stories', component: StoryComponent },
  { path: 'addstory', component: StoryFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
