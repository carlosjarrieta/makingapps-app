import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AreasService  {

  constructor(private http: HttpClient) { }


  private api_url = `${environment.api_url}/areas`;

  getAllAreas(): Observable<any> {
    return this.http.get(this.api_url);
  }
 

}
