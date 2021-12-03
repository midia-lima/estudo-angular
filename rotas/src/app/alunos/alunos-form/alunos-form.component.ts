import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, IFormCanDeactivate {

  id: number;
  aluno: any;
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService
  ) { }

  ngOnInit(): void {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
    })

    this.aluno = this.alunoService.getAluno(this.id)

    if (this.aluno === null){
      this.aluno = {};
    }
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

  onIput(){
    console.log("Form Mudou? " + this.formMudou);
    this.formMudou = true;
  }

  podeMudarRota(){
    if(this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página')
    }
    return true;
  }

  podeDesativar(){
    return this.podeMudarRota();
  }

}
