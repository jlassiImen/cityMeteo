import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SimpleLoginService {

    isAuthenticated=false;
    
  constructor(private http: HttpClient, private router: Router) {}

  public register(user: any): Observable<any> {
    const apiURL = 'http://localhost:'+process.env.PORT;
    return this.http.post(apiURL+`/registerUser`, user);
     
  }

  public authenticate(user: any): Observable<any> {
    const apiURL = 'http://localhost:'+process.env.PORT;
    return this.http.post(apiURL+`/authenticate`, user);
   
  }

  public logout(): void {
    this.router.navigateByUrl('/');
  }

}
