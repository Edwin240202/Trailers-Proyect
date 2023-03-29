import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api-service.service';

@Component({
  selector: 'app-new-trailer',
  templateUrl: './new-trailer.component.html',
  styleUrls: ['./new-trailer.component.scss']
})
export class NewTrailerComponent implements OnInit {

  public movie: any = {};

  constructor(private apiService: ApiService) { }

  public ngOnInit(): void {
  }

  public save(): void {
    this.apiService.saveMovie(this.movie).subscribe((data: any) => {
      console.log(data)
    })
  }

}
