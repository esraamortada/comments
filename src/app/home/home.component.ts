import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../Interfaces/movie';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _MoviesService:MoviesService){

  }
  trendingMovies:Movie[]=[];
  imagePrefix:string='https://image.tmdb.org/t/p/w500';
  ngOnInit(): void {
  
  }
  dispalyMovies(pageNum:number){
    this._MoviesService.getTrendingMovies(pageNum).subscribe((response)=>{
      this.trendingMovies = response.results;

    })
  }

}
