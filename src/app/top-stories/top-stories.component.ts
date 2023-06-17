import { Component, OnInit } from '@angular/core';
import { TopStoriesService } from '../services/top-stories.service';
import { type Stories } from 'src/types';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css'],
})
export class TopStoriesComponent implements OnInit {
  topStoriesList: Stories[] = [];

  constructor(private topStoriesService: TopStoriesService) {}

  ngOnInit(): void {
    this.showTopStories();
  }

  showTopStories() {
    return this.topStoriesService.getTopStories().subscribe(
      (result) => {
        this.topStoriesList = result.results;
      },
      (error: any) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
