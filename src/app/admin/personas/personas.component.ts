import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../models/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {


  public personas: Persona[];
  selectedPersona: Persona;
  // sorting
  key: 'name';
  reverse: boolean = false;

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(private personaService:PersonasService,
    private route:Router) { }

  ngOnInit() {
    this.getPersonas();
  }

  getPersonas() {
    this.personaService.getPersonas().subscribe(data => { this.personas = data; });
  }

  createPersona(): void{

  }

  editPerson(persona:Persona){
console.log(persona);
this.route.navigate(['admin/personas/edit']);
  }


  deletePersona(persona: Persona): void {
    if(confirm("Deseas eliminar a "+ persona.name)) {
      this.personaService.deletePersona(persona.id)  
      .subscribe(data => {  
        this.personas = this.personas.filter(u => u !== persona);  
      })  
    }  
   
  }  
}
