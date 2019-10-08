import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    f: FormGroup;
    errorCredentials = false;
    errorServer = false;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
        this.f = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]]
        });
    }

    clearError() {
        this.errorServer = false;
        this.errorCredentials = false;
    }

    onSubmit() {
        this.authService.login(this.f.value).subscribe(
            (resp => {
                this.router.navigate(['admin']);
            }),
            (errorResponse: HttpErrorResponse) => {
                if (errorResponse.status === 401) {
                    this.errorCredentials = true;
                    this.errorServer = false;
                } else if (errorResponse.status === 0) {
                    this.errorServer = true;
                    this.errorCredentials = false;
                }
            }
        );
    }

}
