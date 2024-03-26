import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';


import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import{HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    NavComponent,
    FooterComponent,
    NotfoundComponent,

    RegisterComponent,
    LoginComponent,
    MovieDetailsComponent,
    CommentsComponent,
    HeadeerComponent,
    FeaturesComponent,
    DescriptionComponent,
    CardsComponent,
    Mariosection1Component,
    Mariosection2Component,
    Mariosection3Component,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
