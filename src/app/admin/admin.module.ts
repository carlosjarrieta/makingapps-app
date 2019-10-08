import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from '../partials/header/header.component';
import { UserService } from '../services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { AreasListComponent } from './areas-list/areas-list.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonasService } from '../services/personas.service';
import { PersonFormComponent } from './personas/partials/person-form/person-form.component';
import { CreateComponent } from './personas/create/create.component';
import { AreasService } from '../services/areas.service';
import { EditComponent } from './personas/edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
    AreasListComponent,
    PersonasComponent,
    PersonFormComponent,
    CreateComponent,
    EditComponent,
  ],
  providers: [UserService, PersonasService, AreasService]
})
export class AdminModule { }
