import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from "./guards/alunos.guard";


// as rotas são compostas de objetos e os objetos possuem atributos que devemos declarar

const appRoutes: Routes = [

  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard]
  },

  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
