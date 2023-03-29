import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api-service.service';

@Component({
  selector: 'app-new-trailer',
  templateUrl: './update-trailer.component.html',
  styleUrls: ['./update-trailer.component.scss']
})
export class UpdateTrailerComponent implements OnInit {

  public movieU: any = {};

  constructor(private apiService: ApiService) { }

  public ngOnInit(): void {
  }

  public saveUpdate(): void {
    this.apiService.saveMovieU(this.movieU).subscribe((data: any) => {
      console.log(data)
    })
  }

}
