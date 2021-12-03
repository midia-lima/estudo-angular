import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlunosComponent } from './alunos.component';
import { AlunosDetalheComponent } from "./alunos-detalhe/alunos-detalhe.component";
import { AlunosFormComponent } from "./alunos-form/alunos-form.component";

import { AlunosGuard } from "../guards/alunos.guard";
import { AlunosCanDeactivateGuard } from "../guards/alunos-deactivate.guard";
import { AlunosDetalheResolve } from './guards/alunos-detalhe.resolve';

const alunosRoutes: Routes = [
  { path: 'alunos',
    component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      { path: 'novo', component: AlunosFormComponent},
      { path: ':id', component: AlunosDetalheComponent,
        resolve: { aluno: AlunosDetalheResolve }
      },
      { path: ':id/editar', component: AlunosFormComponent, canDeactivate: [AlunosCanDeactivateGuard]},
  ] },
]

@NgModule({
  imports:[RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]

})

export class AlunosRoutingModule {}
