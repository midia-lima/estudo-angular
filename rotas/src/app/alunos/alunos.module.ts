import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosCanDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunosDetalheResolve } from './guards/alunos-detalhe.resolve';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    AlunosRoutingModule

  ],
  exports:[],
  declarations:[
    AlunosComponent,
    AlunosFormComponent,
    AlunosDetalheComponent
  ],
  providers: [
    AlunosService,
    AlunosCanDeactivateGuard,
    AlunosDetalheResolve
  ]
})

export class AlunosModule {}
