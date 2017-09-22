import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: '', component: AdminComponent },
    { path: 'users', component: UsersComponent },
    { path: 'roles', component: RolesComponent },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ],
  declarations: [UsersComponent, RolesComponent, AdminComponent]
})
export class AdminModule { }
