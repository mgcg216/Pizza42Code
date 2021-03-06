import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { CallbackComponent } from './callback/callback.component';
import { AboutComponent } from './about/about.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
