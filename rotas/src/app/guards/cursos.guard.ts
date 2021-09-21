import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()

export class CursosGuard implements CanActivateChild {

  constructor(  ) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    console.log('CursosGuard');

    return true;
  }
}
