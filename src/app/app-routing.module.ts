import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';

const routes: Routes = [
    {path: '', redirectTo: 'admin', pathMatch: 'full'},
    {path: 'auth/login', component: LoginComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
