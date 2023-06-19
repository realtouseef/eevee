import { Component, OnInit } from '@angular/core';
import { ValorantService } from '../services/valorant/valorant.service';
import { AgentProps } from 'src/types';

@Component({
  selector: 'app-valorant',
  templateUrl: './valorant.component.html',
  styleUrls: ['./valorant.component.css'],
})
export class ValorantComponent implements OnInit {
  allAgents: any = [];
  isLoading = false;

  constructor(private agents: ValorantService) {}

  ngOnInit(): void {
    this.showAgents();
  }

  showAgents() {
    this.isLoading = true;
    return this.agents.getAgents().subscribe(
      (result: any) => {
        this.allAgents = result.data;
        this.isLoading = false;
      },
      (error: any) => {
        console.error("Couldn't fetch: ", error);
      }
    );
  }
}
