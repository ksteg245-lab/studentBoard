import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';  
import { Courses} from './courses/courses';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'courses', component: Courses },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

  ];
