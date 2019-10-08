import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  f: FormGroup;

  errorCredentials = false;
  errorServer = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.f = this.formBuilder.group({
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      area_id: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      nit: [null, [Validators.required]],
    });

  }

  clearError() {
    this.errorServer = false;
    this.errorCredentials = false;
  }


}
