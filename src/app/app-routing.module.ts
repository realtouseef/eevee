import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { RickMortyComponent } from './rick-morty/rick-morty.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'top-stories',
    component: TopStoriesComponent,
  },
  {
    path: 'rick-morty',
    component: RickMortyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
