import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public login(body: { user: string; password: string }): boolean {
    return (body.user === 'admin' && body.password === '1234');
  }

  public getMovies(){
   return this.http.get('http://localhost:3000/api/users');
  }

  public saveMovie(body: any){
    return this.http.request('POST', 'http://localhost:3000/api/users?redirect=false', { body });
  }

  public saveMovieU(body: any){
    return this.http.request('PUT', 'http://localhost:3000/api/users?redirect=false', { body });
  }

  public deleteMovie(id: string){
    return this.http.request('DELETE', `http://localhost:3000/api/users/${id}?redirect=false`);
  }
}