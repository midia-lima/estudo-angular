import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';

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
  providers: [AlunosService]
})

export class AlunosModule {}
