import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AreasService } from '../../../../services/areas.service';
import { Area } from '../../../../models/area';
import { PersonasService } from '../../../../services/personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>()

  f: FormGroup;
  public areas: Area[];

  constructor(private formBuilder: FormBuilder,
    private areasService: AreasService,
    private personaService: PersonasService,
    private router: Router
  ) { }
 

  ngOnInit() {
    this.f = this.formBuilder.group({
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      area_id: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      nit: [null, [Validators.required]],
    });


    this.getAllAreas();
    this.formReady.emit(this.f)

  }

  send(): void {
      this.personaService.createPersona(this.f.value).subscribe(
        (resp => {
          this.router.navigate(['admin/personas']);
        })
      )
  }

  getAllAreas() {
    this.areasService.getAllAreas().subscribe(data => {
      this.areas = data;
    });
  }
}
