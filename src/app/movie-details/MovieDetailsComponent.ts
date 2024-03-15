import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id: string = '';
  movieDetails:any={};
  imagePrefix:string='https://image.tmdb.org/t/p/w500';

  constructor(private _ActivatedRoute: ActivatedRoute ,private _MoviesService:MoviesService) {
  }
  ngOnInit(): void {
    this.id =  this._ActivatedRoute.snapshot.params['id'];

    this._MoviesService.getMovieDetails(this.id).subscribe((response)=>{
      this.movieDetails=response;


    })


  }

}
