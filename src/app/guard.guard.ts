import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class GuardGuard implements CanActivate {

  constructor(private router: Router){ }

  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | 
  Promise<boolean | UrlTree> | boolean | UrlTree {

    if(localStorage.getItem('token') !== null) {
      return true;
}

console.log(localStorage.getItem('token'))

  return true;
  }

}


