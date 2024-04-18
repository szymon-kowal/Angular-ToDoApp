import { Routes } from '@angular/router';
import { SingleToDoComponent } from './components/single-to-do/single-to-do.component';
import { DisplayToDoComponent } from './components/display-to-do/display-to-do.component';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: DisplayToDoComponent },
  { path: 'todo/:id', component: SingleToDoComponent },
];
