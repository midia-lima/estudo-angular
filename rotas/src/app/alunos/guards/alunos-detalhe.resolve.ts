import { AlunosService } from './../alunos.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';
import { Aluno } from '../alunos';


@Injectable()
export class AlunosDetalheResolve implements Resolve<Aluno> {

  constructor(private alunosService: AlunosService){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<any>|Promise<any>|any {

    console.log('AlunosDetalheResolve');

    let id = route.params['id']
    return this.alunosService.getAluno(id);
  }
}

