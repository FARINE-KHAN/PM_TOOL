import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { authGuard } from '../auth.guard';
import {  PanelMenuModule } from 'primeng/panelmenu';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: AdminComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DashboardComponent },
      { path: 'register',loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule)},
      { path: 'attendance',loadChildren: () => import('../dashboard/attendance/attendance.module').then((m) => m.AttendanceModule)},

    ],
  },
];

@NgModule({
  declarations: [AdminComponent, DashboardComponent, SidebarComponent],
  imports: [CommonModule, RouterModule.forChild(routes),PanelMenuModule],
})
export class AdminModule { }
