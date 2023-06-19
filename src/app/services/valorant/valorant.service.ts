import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValorantService {
  BASE_URL = 'https://valorant-api.com/v1/agents';
  constructor(private http: HttpClient) {}

  getAgents() {
    return this.http.get(this.BASE_URL);
  }
}
