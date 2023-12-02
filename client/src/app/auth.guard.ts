import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  const userLoggedIn= sessionStorage.getItem("user")
  const router = inject(Router);
console.log("innn")
  if(userLoggedIn){
    return true;
  }else{
    router.navigate(["/login"]);
    return false;
  }

};
