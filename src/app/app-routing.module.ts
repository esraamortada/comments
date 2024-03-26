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
import { CardsComponent } from './cards/cards.component';
import { Mariosection1Component } from './mariosection1/mariosection1.component';
import { Mariosection2Component } from './mariosection2/mariosection2.component';
import { Mariosection3Component } from './mariosection3/mariosection3.component';

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
  { path:'mario1',component:Mariosection1Component},
  { path:'mario2',component:Mariosection2Component},
  { path:'mario3',component:Mariosection3Component},
  { path:'card',component:CardsComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
