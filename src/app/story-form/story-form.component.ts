import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoryService } from '../services/story.service';
import { Story } from '../models/story.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})

export class StoryFormComponent implements OnInit {
  story: Story = {
    autor: '',
    titel: '',
    date: new Date(),
    text: ''
  }

  constructor(private storyService: StoryService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.storyService.addStory(this.story);
    this.story.autor = '';
    this.story.titel = '';
    this.story.text = '';
    this.router.navigate(['/stories']);
  } 
}
