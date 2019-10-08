import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';
import { PersonasComponent } from './personas/personas.component';
import { createComponent } from '@angular/compiler/src/core';
import { CreateComponent } from './personas/create/create.component';
import { EditComponent } from './personas/edit/edit.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'personas',
        component: PersonasComponent
      },
      {
        path: 'personas/create',
        component: CreateComponent
      },
      {
        path: 'personas/edit/:id',
        component: EditComponent
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
