import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { AuthGuard } from "../guards/auth.guard";
import { CursosGuard } from "../guards/cursos.guard";


// as rotas são compostas de objetos e os objetos possuem atributos que devemos declarar

const cursosRoutes: Routes = [
  {
    path: '',
    component: CursosComponent,
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard]
  },

  {
    path: 'curso-nao-encontrado',
    component: CursoNaoEncontradoComponent,
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard]

  },
  {
    path: ':id',
    component: CursoDetalheComponent,
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard] }

]

@NgModule({
  imports:[RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]

})
export class CursosRoutingModule {}
