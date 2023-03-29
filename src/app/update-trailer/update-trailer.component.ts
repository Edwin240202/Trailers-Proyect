import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { map } from 'rxjs';
import { ApiService } from '../service/api-service.service';

@Component({
  selector: 'app-new-trailer',
  templateUrl: './update-trailer.component.html',
  styleUrls: ['./update-trailer.component.scss']
})
export class UpdateTrailerComponent implements OnInit {

  public movie: any = {};

  constructor(
    private apiService: ApiService,
    private router: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.router.queryParams.subscribe(data => {
      console.log(data);
      this.movie = data;
    });
  }

  public saveUpdate(): void {
    console.log(this.movie)
    this.apiService.saveUpdateMovie(this.movie).subscribe((data: any) => {
      console.log(data)
    })
  }

}
