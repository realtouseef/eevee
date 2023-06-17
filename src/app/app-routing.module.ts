import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {
    path: 'Home Page',
    component: HomeComponent,
  },
  {
    path: 'top-stories',
    component: TopStoriesComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
