import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { Repo } from './repo-class/repo';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component:ProfileComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'repo', component:Repo}
 

];
@NgModule ({imports:[RouterModule.forChild(routes)],exports:[RouterModule]})
export class sandraroutingModule{}

