import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { NotfoundComponent } from './notfound/notfound.component';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/MovieDetailsComponent';
import { CommentsComponent } from './comments/comments.component';
import { HeadeerComponent } from './headeer/headeer.component';
import { FeaturesComponent } from './features/features.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [

  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  { path:'moviedetails/:id',component:MovieDetailsComponent},
  { path:'comment',component:CommentsComponent},
  { path:'desc',component:DescriptionComponent},
  { path:'feature',component:FeaturesComponent},
  { path:'header',component:HeadeerComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
