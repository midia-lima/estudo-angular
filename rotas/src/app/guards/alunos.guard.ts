import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()

export class AlunosGuard implements CanActivateChild {

  constructor(  ) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    console.log('AlunosGuard');

    if(state.url.includes('editar')){
      alert('Usuário sem acesso')
      return false
    }

    console.log(route);
    console.log(state);
    return true;
  }
}
