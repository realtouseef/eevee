import { Component, OnInit } from '@angular/core';
import { TopStoriesService } from '../services/top-stories/top-stories.service';
import { type Stories } from 'src/types';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css'],
})
export class TopStoriesComponent implements OnInit {
  topStoriesList: Stories[] = [];
  isLoading = false;

  constructor(private topStoriesService: TopStoriesService) {}

  ngOnInit(): void {
    this.showTopStories();
  }

  showTopStories() {
    this.isLoading = true;
    return this.topStoriesService.getTopStories().subscribe(
      (result) => {
        this.topStoriesList = result.results;
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
