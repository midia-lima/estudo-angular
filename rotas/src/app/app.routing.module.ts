import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AlunosComponent } from './alunos/alunos.component';
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
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },

  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    component: AlunosComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },

  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
  }


]

@NgModule({
  imports:[RouterModule.forRoot(appRoutes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
