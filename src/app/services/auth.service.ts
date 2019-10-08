import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {


  private permisos: [any];

  constructor(private http: HttpClient,
    private router: Router) {
  }


  login(auth: { email: string, password: string }): Observable<boolean> {
    
     
    
    return this.http.post<any>(`${environment.api_url}/user_token`, auth)
      .do(data => {
        localStorage.setItem('token', data.jwt);
        localStorage.setItem('user', btoa(JSON.stringify(this.getUser())));
      });
  }

  getUser(): Observable<any> {
    return this.http.get(`${environment.api_url}/users/current`);
  }

  
  check(): boolean {
    return localStorage.getItem('user') ? true : false;
  }



  // Metodo para logout
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
   

    this.router.navigate(['auth/login']);
  }

}

 


