import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userData: { user: string; password: string } = { user:'', password: ''};

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  public login(){
    const result = this.apiService.login(this.userData)

    if(result){
      this.router.navigate(['/datos'])
    }
  }

}
