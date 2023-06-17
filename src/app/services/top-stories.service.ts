import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopStoriesService {
  BASE_URL = 'https://api.nytimes.com/svc/topstories/v2';
  API_KEY = 'i5ApdYEVnFviGBBWbSPW7RcTMyh4s0Nd';
  SECTION = 'science';

  constructor(private http: HttpClient) {}

  getTopStories(): Observable<any> {
    return this.http.get<any>(
      this.BASE_URL + '/' + this.SECTION + '.json?api-key=' + this.API_KEY
    );
  }
}
