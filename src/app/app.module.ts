import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { KopfzeileComponent } from './kopfzeile/kopfzeile.component';
import { WillkommensseiteComponent } from './willkommensseite/willkommensseite.component';
import { StoryComponent } from './story/story.component';
import { StoryFormComponent } from './story-form/story-form.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { environment } from './../environments/environment';
import { StoryService } from './services/story.service';

@NgModule({
  declarations: [
    AppComponent,
    KopfzeileComponent,
    WillkommensseiteComponent,
    StoryComponent,
    StoryFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
