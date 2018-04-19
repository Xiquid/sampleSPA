import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Story } from '../models/story.model';

@Injectable()
export class StoryService {
    storyCollection: AngularFirestoreCollection<Story>;
    stories: Observable<Story[]>;

    constructor(public afs: AngularFirestore) {
        this.stories = this.afs.collection('stories').valueChanges();
        this.storyCollection = this.afs.collection('stories');

    }

    getStories(){
        return this.stories;
    }

    addStory(story: Story){
        this.storyCollection.add(story);
    }
}