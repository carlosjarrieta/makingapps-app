import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Area } from '../../../models/area';
import { AreasService } from '../../../services/areas.service';
import { PersonasService } from '../../../services/personas.service';
import { Persona } from '../../../models/persona';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  f: FormGroup;
  public areas: Area[];
  personaSeleccionada: Persona;
  id: any;

  constructor(private formBuilder: FormBuilder,
    private areasService: AreasService,
    private personaService: PersonasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //obtener las areas
    this.getAllAreas();


    //obtener el parametro enviado
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
  

    this.f = this.formBuilder.group({
      id: [],
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      area_id: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      nit: [null, [Validators.required]],
    });

    this.personaService.getPersonaById(this.id).subscribe(data => {
      this.personaSeleccionada = data;
      this.f.setValue(data)
    });


    
  }

  getAllAreas() {
    this.areasService.getAllAreas().subscribe(data => {
      this.areas = data;
    });
  }


  editPersona(): void {
    this.personaService.updatePersona(this.f.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['admin/personas']);
        },
        error => {
          alert(error);
        });
  }
}