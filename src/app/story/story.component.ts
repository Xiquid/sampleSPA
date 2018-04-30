import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { StoryService } from '../services/story.service';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  stories$: Observable<any>;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.stories$ = this.storyService.getStories();
  }
}
