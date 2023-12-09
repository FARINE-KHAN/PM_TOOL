// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// export const authGuard: CanActivateFn = (route, state) => {
//   const userLoggedIn= sessionStorage.getItem("user")
//   const router = inject(Router);
// console.log("innn")
//   if(userLoggedIn){
//     return true;
//   }else{
//     router.navigate(["employee/login"]);
//     return false;
//   }

// };

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    const isAuthenticated = sessionStorage.getItem('user');

    if (isAuthenticated) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
