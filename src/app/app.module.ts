import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RickMortyComponent } from './rick-morty/rick-morty.component';
import { ValorantComponent } from './valorant/valorant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopStoriesComponent,
    RickMortyComponent,
    ValorantComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
