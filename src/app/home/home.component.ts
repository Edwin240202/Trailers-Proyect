import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movies:any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMovies().subscribe((data: any) => {
      if(data){
        this.movies = data;
      }
    })
  }

}
