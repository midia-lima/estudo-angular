import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IFormCanDeactivate } from "./iform-candeactivate";

@Injectable()
export class AlunosCanDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

  canDeactivate(
    component: IFormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|boolean {

    console.log('guarda de desativação');
    //return component.podeMudarRota ? component.podeMudarRota() : true;

    return component.podeDesativar();
  }
}

