import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Persona } from '../models/persona';

@Injectable()
export class PersonasService {

  constructor(private http: HttpClient) { }

  private api_url = `${environment.api_url}/personas`;

  getPersonas(): Observable<any> {
    return this.http.get(this.api_url);
  }

  deletePersona(id: number) {  
    return this.http.delete<Persona[]>(this.api_url + "/" + id);  
  }  
  createPersona(persona: Persona) {  
    return this.http.post(this.api_url, persona);  
  }  
  getPersonaById(id: number) {  
    return this.http.get<Persona>(this.api_url + '/' + id);  
  }  
  updatePersona(persona: Persona) {  
    return this.http.put(this.api_url + '/' + persona.id, persona);  
  }  

}
