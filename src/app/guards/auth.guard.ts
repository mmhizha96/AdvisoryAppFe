import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppstorageService } from '../services/appstorage.service';

export const authGuard: CanActivateFn = (route, state) => {

 let storage=inject(AppstorageService);
 let router= inject(Router)
  if (storage.retrieve('loggedUser')) {
    return true; // User is logged in, allow access
  } else {
    router.navigate(["login"])
    return false;
  }
};
