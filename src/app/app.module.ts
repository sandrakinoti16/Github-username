import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { Repo } from './repo-class/repo';


const routes: Routes = [
  {path: '', component:ProfileComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'repo', component:Repo}
 

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class sandraRoutingModule { }