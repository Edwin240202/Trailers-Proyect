import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api-service.service';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  public movies:any = [];

  constructor(private apiService: ApiService, private router: Router) {
  }

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

  public update(m:any): void{
    this.router.navigate(['/update-trailer'], { state: { trailer: m}})
  }
}
