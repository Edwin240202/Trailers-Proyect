import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api-service.service';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  public movies:any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMovies().subscribe((data: any) => {
      if(data){
        this.movies = data;
      }
    })
  }
  public deleteMovie(id: string): void {
    this.apiService.deleteMovie(id).subscribe((data: any) => {
      console.log(data)
      this.ngOnInit();
    })
  }

}
