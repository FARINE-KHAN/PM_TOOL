import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './admin/register/register.component';
// import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './dashboard/attendance/attendance.component';
import { authGuard } from './auth.guard';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'dashboard', component: DashboardComponent, canActivate:[authGuard] },
//   { path: 'dashboard/attendance', component: AttendanceComponent , canActivate:[authGuard]},
// ];
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }